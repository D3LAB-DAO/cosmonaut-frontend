import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C4U2() {
  const code1 = `
\`\`\`bash
# see how many codes we have now
wasmd query wasm list-code $NODE

# now we store the bytecode on chain
# gas is huge due to wasm size... but auto-zipping reduced this from 1.8M to around 600k
# you can see the code in the result
RES=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from wallet $TXFLAG -y --output json -b block)

# you can also get the code this way
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')

# no contracts yet, this should return an empty list
wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json

# you can also download the wasm from the chain and check that the diff between them is empty
wasmd query wasm code $CODE_ID $NODE download.wasm
diff artifacts/cw_nameservice.wasm download.wasm
\`\`\``;
  const code2 = `
\`\`\`bash
# instantiate contract and verify
INIT='{"purchase_price":{"amount":"100","denom":"upebble"},"transfer_price":{"amount":"999","denom":"upebble"}}'
wasmd tx wasm instantiate $CODE_ID "$INIT" \
    --from wallet --label "awesome name service" $TXFLAG -y

# check the contract state (and account balance)
wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json
CONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
echo $CONTRACT

# we should see this contract with 50000usponge
wasmd query wasm contract $CONTRACT $NODE
wasmd query bank balances $CONTRACT $NODE

# you can dump entire contract state
wasmd query wasm contract-state all $CONTRACT $NODE

# note that we prefix the key "config" with two bytes indicating its length
# echo -n config | xxd -ps
# gives 636f6e666967
# thus we have a key 0006636f6e666967

# you can also query one key directly
wasmd query wasm contract-state raw $CONTRACT 0006636f6e666967 $NODE --hex

# Note that keys are hex encoded, and val is base64 encoded.
# To view the returned data (assuming it is ascii), try something like:
# (Note that in many cases the binary data returned is non in ascii format, thus the encoding)
wasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r '.models[0].key' | xxd -r -ps
wasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r '.models[0].value' | base64 -d

# or try a "smart query", executing against the contract
wasmd query wasm contract-state smart $CONTRACT '{}' $NODE
# (since we didn't implement any valid QueryMsg, we just get a parse error back)
\`\`\``;

  return (
    <>
      <p class="font-normal lg:text-base text-sm mb-4">
        만들어낸 wasm binary executable은 블록체인에 업로드할 수 있습니다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        바이트코드는 CODE_ID를 통해 다운로드할 수 있고, 이를 보유하고 있는
        바이트코드와 diff를 통해 비교해 검증할 수 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        이제 wasm 컨트랙트를 인스턴스화 할 수 있습니다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code2}
        linkTarget="_blank"
      />
    </>
  );
}

export default L0C4U2;

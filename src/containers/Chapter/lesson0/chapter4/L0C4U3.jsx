import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C4U3() {
  const code1 = `
\`\`\`bash
# execute fails if wrong person
REGISTER='{"register":{"name":"fred"}}'
wasmd tx wasm execute $CONTRACT "$REGISTER" \n
    --amount 100upebble \n
    --from wallet $TXFLAG -y

# query name record
NAME_QUERY='{"resolve_record": {"name": "fred"}}'
wasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json
# {"data":{"address":"wasm1pze5wsf0dg0fa4ysnttugn0m22ssf3t4a9yz3h"}}

# buy and transfer name record to wallet2 (change the "to" address to wallet2 generated in previous steps)
TRANSFER='{"transfer":{"name":"fred","to":"wasm15522nrwtvsf7mt2vhehhwuw9qpsxw2mghqzu50"}}'
wasmd tx wasm execute $CONTRACT "$TRANSFER" \n
    --amount 999upebble \n
    --from wallet $TXFLAG -y
\`\`\``;

  return (
    <>
      <p class="font-normal lg:text-base text-sm mb-4">
        인스턴스화가 끝난 후, 이제 메서드를 호출해 이 인스턴스의 state 변경을
        요청하거나(execute) 데이터를 가져올 수(query) 있습니다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
    </>
  );
}

export default L0C4U3;

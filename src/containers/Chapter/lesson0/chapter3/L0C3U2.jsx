import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C3U2() {
  const code1 = `
\`\`\`javascript
// Create or load account
const mnemonic = loadOrCreateMnemonic('fred.key')
mnemonicToAddress(mnemonic)

const {address, client} = await connect(mnemonic, {})
address

client.getAccount()
// if empty - this only works with CosmWasm
hitFaucet(defaultFaucetUrl, address, 'PEBBLE')
client.getAccount()
\`\`\``;

  return (
    <>
      <p class="font-normal lg:text-base text-sm mb-4">
        타입스크립트 라이브러리인 CosmJS를 사용하면 쿼리와 트랜잭션 등록을
        처리할 수 있습니다. @cosmjs/cli도 존재하는데, 이는 Node 콘솔과도 같다고
        생각하면 됩니다. 만일 여기에 익숙하다면 CLI보다 더 편하게 사용할 수
        있겠죠.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        REPL 환경을 이용해 위 Go CLI에서 했던 일과 같은 일을 한번 해봅시다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
    </>
  );
}

export default L0C3U2;

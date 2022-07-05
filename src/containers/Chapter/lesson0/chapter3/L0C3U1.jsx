import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C3U1() {
  const code1 = `
\`\`\`bash
$ source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/cliffnet-1/defaults.env)

# add wallets for testing
$ wasmd keys add wallet
$ wasmd keys add wallet2
\`\`\``;
  const code2 = `
\`\`\`bash
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) '{"denom":"upebble","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet2) '{"denom":"upebble","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit
\`\`\``;

  return (
    <>
      <p class="font-bold text-xl mb-2">!!Chapter3 설명 부분!!</p>
      <p class="font-normal lg:text-base text-sm mb-4">
        컨트랙트를 구동하기 위한 환경도 필요하겠죠. 작성한 컨트랙트를 배포하고
        테스트하고자 로컬 네트워크를 형성해도 되지만, 이미 존재하는 네트워크를
        사용할 수도 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        현재 Cliffnet 테스트넷이 구동되고 있습니다. 잘 동작하고 있는지 다음
        URL로부터 알아볼 수 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rpc.cliffnet.cosmwasm.com/status">
          https://rpc.cliffnet.cosmwasm.com/status
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        혹은 다음 블록 익스플로러로부터 상세 정보를 확인할 수도 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://block-explorer.cliffnet.cosmwasm.com/">
          https://block-explorer.cliffnet.cosmwasm.com/
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        이 네트워크와 소통하기 위해 wasmd를 사용할 수도 있고, Node REPL을 사용할
        수도 있습니다.
      </p>
      <p class="font-bold text-xl mb-8">!!Chapter3 설명 부분!!</p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        성공적으로 테스트를 위한 지갑 등록이 진행되었다면, wasmd에서 그 정보를
        출력해 줄 것입니다. 비록 테스트넷이지만, 비밀번호 분실을 대비하여
        mnemonic들을 안전한 곳에 별도 보관하세요. 귀찮음을 피하려면.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        블록체인상에서의 활동은 모두 수수료가 들기 때문에, 상호작용을 위해
        약간의 토큰이 필요할 것입니다. 여기 테스트넷에는 두 개의 네이티브 토큰이
        존재합니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <ul class="col-span-2 list-disc text-base font-normal md:ml-3 ml-5 md:mt-0 mt-3">
          <li>ROCK (urock) : 검증인이 되기 위해 사용됨</li>
          <li>PEBBLE (upebble) : 수수료를 지불하기 위해 사용됨</li>
        </ul>
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        수수료를 원하니 우리는 upebble을 요청하면 되겠죠. denom에 upebble이라
        적혀있음을 주목하면서 다음 명령을 수행합니다. 이 명령은 faucet으로부터
        약간의 토큰을 요청합니다.
      </p>
    </>
  );
}

export default L0C3U1;

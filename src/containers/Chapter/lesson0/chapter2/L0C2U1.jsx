import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C2U1() {
  const code1 = `
\`\`\`bash
$ git clone https://github.com/CosmWasm/wasmd.git
$ cd wasmd

# replace the v0.23.0 with the most stable version
$ git checkout v0.23.0
$ make install

# verify the installation
$ wasmd version
\`\`\``;

  return (
    <>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://docs.cosmwasm.com/docs/0.14/getting-started/installation/">
          https://docs.cosmwasm.com/docs/0.14/getting-started/installation/
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        와즘 스마트 컨트랙트 구동이 가능한 코스모스존 구현체인 wasmd는 코즘와즘
        플랫폼의 핵심입니다. 이는 cosmos/gaia를 기반으로 x/wasm을 추가한
        것인데요.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        즉, wasmd 바이너리는 gaiad처럼 동작하고 거기에다가 x/wasm 모듈의
        기능성이 더해진 것입니다. 만일 컨트랙트를 개발한다면 당연히 wasmd가
        필요하겠죠.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        wasmd 설치를 위해서는 go가 우선 설치되어 있어야 하며, PATH 설정도 잘
        되어 있어야 합니다.
      </p>
    </>
  );
}

export default L0C2U1;

import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C4U1() {
  const code1 = `
\`\`\`bash
# get the code
$ git clone https://github.com/InterWasm/cw-contracts
$ cd cw-contracts
$ git checkout main
$ cd contracts/nameservice
\`\`\``;

  const code2 = `
\`\`\`bash
# compile the wasm contract with stable toolchain
$ rustup default stable
$ cargo wasm
\`\`\``;

  const code3 = `
\`\`\`bash
$ RUSTFLAGS='-C link-arg=-s' cargo wasm
\`\`\``;

  return (
    <>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        예제 컨트랙트를 컴파일하고 wasm binary excutable을 만들어봅시다. 다음은
        많은 컨트랙트 예제들이 있는
        <a href="https://github.com/InterWasm/cw-contracts">cw-contracts</a>를
        참고했습니다. 이 중에서 유명한 예제인 nameservice를 한번 컴파일
        해봅시다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        우선 코드를 깃허브로부터 가져옵니다.
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rust-lang.github.io/rustup/concepts/toolchains.html">
          https://rust-lang.github.io/rustup/concepts/toolchains.html
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        rustup을 이용하면 좀 더 명시적으로 툴체인을 지정해 컴파일할 수 있습니다.
        툴체인은 여러 리스트와 컴포넌트들을 포함하고 있으며, 이를 지정해서
        컴파일하는 것으로 특정 프로젝트에서는 특정 채널(stable, nightly, beta)과
        설정으로 러스트를 컴파일할 수 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        여기서는 stable 툴체인을 사용하겠습니다.
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code3}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        만일 불필요한 코드를 배제하고 컴파일하고 싶으면 다음을 수행할 수
        있습니다. 더 자세한 것은 추후 최적화를 소개할 때 말씀드리겠습니다.
      </p>
    </>
  );
}

export default L0C4U1;

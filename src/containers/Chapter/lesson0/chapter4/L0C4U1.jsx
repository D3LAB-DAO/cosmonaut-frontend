import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import BasicP from "../../../../components/Contents/BasicP";
import BasicA from "../../../../components/Contents/BasicA";
import CodeBlock from "../../../../components/Contents/CodeBlock";

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
      <Markdown code={code1} />
      <BasicP>
        Let's compile an example contract and create a wasm binary excutable. It
        is based on
        <a
          class="mx-1 underline font-bold lg:text-base text-sm mb-4"
          href="https://github.com/InterWasm/cw-contracts"
        >
          cw-contracts
        </a>
        , which has many examples.
      </BasicP>
      <BasicP>
        We will use a famous one, <CodeBlock>nameservice.</CodeBlock>
      </BasicP>
      <BasicP>First, get the code from the github.</BasicP>

      <Markdown code={code2} />
      <BasicA>
        <a href="https://rust-lang.github.io/rustup/concepts/toolchains.html">
          https://rust-lang.github.io/rustup/concepts/toolchains.html
        </a>
      </BasicA>
      <BasicP>
        rustup allows you to compile with more explicitly specified toolchain.
        The toolchain contains a number of lists and components. By specifying
        it, a project can be compiled with a specific channel (stable, nightly,
        beta) and settings.
      </BasicP>
      <BasicP>We will use the stable toolchain at this example.</BasicP>

      <Markdown code={code3} />
      <BasicP>
        If you want to eliminate unnecessary code from compiling, type the
        following command.
      </BasicP>
    </>
  );
}

export default L0C4U1;

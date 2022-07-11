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
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        Let's compile an example contract and create a wasm binary excutable. It
        is based on{" "}
        <a href="https://github.com/InterWasm/cw-contracts">cw-contracts</a>,
        which has many examples.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        We will use a famous one, <b>nameservice.</b>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        First, get the code from the github.
      </p>

      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rust-lang.github.io/rustup/concepts/toolchains.html">
          https://rust-lang.github.io/rustup/concepts/toolchains.html
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        rustup allows you to compile with more explicitly specified toolchain.
        The toolchain contains a number of lists and components. By specifying
        it, a project can be compiled with a specific channel (stable, nightly,
        beta) and settings.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        We will use the stable toolchain at this example.
      </p>

      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code3}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        If you want to eliminate unnecessary code from compiling, type the
        following command.
      </p>
    </>
  );
}

export default L0C4U1;

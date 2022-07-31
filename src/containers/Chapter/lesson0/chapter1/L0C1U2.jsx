import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import BasicA from "../../../../components/Contents/BasicA";
import Header from "../../../../components/Contents/Header";

function L0C1U2() {
  const code1 = `
\`\`\`bash
curl https://sh.rustup.rs -sSf | sh -s -- --help
\`\`\``;

  const code2 = `
\`\`\`bash
# create & enter hello_world directory
$ mkdir hello_world
$ cd hello_world
\`\`\``;

  const code3 = `
\`\`\`bash
# create main.rs
$ vi main.rs
\`\`\``;

  const code4 = `
\`\`\`rust
fn main() {
  println!("Hello, world!");
}
\`\`\``;

  const code5 = `
\`\`\`bash
# compile
$ rustc main.rs

# $ ls
# main main.rs

# execute
$ ./main
Hello, world!
\`\`\``;

  const code6 = `
\`\`\`bash
$ cargo --version
\`\`\``;

  return (
    <>
      <Markdown code={code1} />
      <BasicA>
        <a target="_blank" href="https://rustup.rs" rel="noreferrer">
          rustup.rs
        </a>
      </BasicA>
      <BasicP>
        <CodeBlock>rustup</CodeBlock> is one of the easiest ways to install
        Rust.
      </BasicP>

      <Markdown code={code2} />
      <BasicA>
        <a
          target="_blank"
          href="https://forge.rust-lang.org/infra/other-installation-methods.html"
          rel="noreferrer"
        >
          Rust Forge - Other Rust Installation Methods
        </a>
      </BasicA>
      <BasicP>
        You can use the Package Manager, the standalone installer, or build
        directly from the source code. Nevertheless, it is much easier and faster to use
        <CodeBlock>rustup</CodeBlock>.
      </BasicP>

      <Header>Check Rust Installation</Header>
      <Markdown code={code3} />
      <BasicP>
        We will make a simple "Hello, world!" example to ensure that Rust is installed well.
      </BasicP>
      <BasicP>
        Just as a Python file ends with a py extension, the Rust file ends with
        an rs extension.
      </BasicP>

      <Markdown code={code4} />
      <BasicP>Fill in the file main.rs as follows.</BasicP>

      <Markdown code={code5} />
      <BasicP>
        That's it! Now save the file, and try the following command.
        This command compiles and executes the main.rs file.
      </BasicP>
      <BasicP>Look at the "Hello, world!" printout on the terminal!</BasicP>

      <Header>Cargo</Header>
      <Markdown code={code6} />
      <BasicP>
        <CodeBlock>Cargo</CodeBlock> is the package manager of Rust. You can
        easily download and build the library through the cargo.
      </BasicP>
      <BasicP>
        If you followed a typical Rust installation,{" "}
        <CodeBlock>Cargo</CodeBlock> would also be installed.
      </BasicP>
    </>
  );
}

export default L0C1U2;

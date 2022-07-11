import React from "react";
import MDEditor from "@uiw/react-md-editor";

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
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rustup.rs">https://rustup.rs</a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <b>rustup</b> is one of the easiest ways to install Rust.
      </p>

      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://forge.rust-lang.org/infra/other-installation-methods.html">
          https://forge.rust-lang.org/infra/other-installation-methods.html
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        You can use the Package Manager, the Standalone installer, or build
        directly from the source code. But it's much easier and faster to use
        <b>rustup</b>.
      </p>

      <p class="font-bold text-xl mb-2">Check Rust Installation</p>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code3}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        To make sure that Rust is installed well, we'll make a simple "Hello,
        world!" example.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Just as a Python file ends with a py extension, the Rust file ends with
        an rs extension.
      </p>

      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code4}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        Fill in the file main.rs as follows.
      </p>

      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code5}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        That's it! Now save the file, and try the following command.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        This command compiles and executes the main.rs file.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Look at the "Hello, world!" printout on the terminal!
      </p>

      <p class="font-bold text-xl mb-2">Cargo</p>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code6}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <b>Cargo</b> is the package manager of Rust. You can easily download and
        build the library through the cargo.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        If you followed a typical Rust installation, <b>Cargo</b> would also be
        installed.
      </p>
    </>
  );
}

export default L0C1U2;

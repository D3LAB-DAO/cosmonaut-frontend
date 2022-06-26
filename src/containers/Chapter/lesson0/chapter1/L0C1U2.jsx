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
# $ vi main.rs
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

  return (
    <>
      <p class="font-normal lg:text-base text-sm mb-4">
        rustup은 Rust를 설치하는 가장 쉬운 방법 중 하나입니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rustup.rs">https://rustup.rs</a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        만일 컨트랙트를 개발한다면 당연히 wasmd가 필요하겠죠.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        이외에 패키지매니저 또는 스탠드얼론 인스톨러를 이용하거나 소스코드로부터
        바로 빌드할 수도 있지만, 특별한 경우가 아니라면 rustup을 사용하는 편이
        훨씬 쉽고 빠릅니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://forge.rust-lang.org/infra/other-installation-methods.html">
          https://forge.rust-lang.org/infra/other-installation-methods.html
        </a>
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        파이썬 파일이 py 확장자로 끝나는 것처럼, 러스트 파일은 rs 확장자로
        끝납니다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code3}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        main.rs 파일에 다음과 같이 작성하세요.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code4}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        끝입니다! 이제 파일을 저장하고, 다음 명령을 수행하세요.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code5}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        이 명령은 우리의 main.rs 파일을 컴파일하고 실행합니다. 터미널에 출력된
        “Hello, world!”를 좀 보세요!
      </p>
    </>
  );
}

export default L0C1U2;

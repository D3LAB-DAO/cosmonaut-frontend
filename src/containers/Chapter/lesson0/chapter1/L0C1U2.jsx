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
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rustup.rs">https://rustup.rs</a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        rustup은 Rust를 설치하는 가장 쉬운 방법 중 하나입니다.
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://forge.rust-lang.org/infra/other-installation-methods.html">
          https://forge.rust-lang.org/infra/other-installation-methods.html
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        이외에 패키지매니저 또는 스탠드얼론 인스톨러를 이용하거나 소스코드로부터
        바로 빌드할 수도 있지만, 특별한 경우가 아니라면 rustup을 사용하는 편이
        훨씬 쉽고 빠릅니다.
      </p>

      <p class="font-bold text-xl mb-2">Rust 설치 확인하기</p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code3}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        설치가 잘 되었는지 확인하기 위해, 간단한 “Hello, world!” 예제를 만들어
        볼 것입니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        파이썬 파일이 py 확장자로 끝나는 것처럼, 러스트 파일은 rs 확장자로
        끝납니다.
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code4}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        main.rs 파일에 다음과 같이 작성하세요.
      </p>

      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code5}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        끝입니다! 이제 파일을 저장하고, 다음 명령을 수행하세요.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        이 명령은 우리의 main.rs 파일을 컴파일하고 실행합니다. 터미널에 출력된
        “Hello, world!”를 좀 보세요!
      </p>

      <p class="font-bold text-xl mb-2">Cargo</p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code6}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        카고는 러스트의 패키지 매니저입니다. 필요로하는 라이브러리를
        다운로드하고 빌드하는 등의 활동을 카고를 통해서 편하게 수행할 수
        있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        일반적인 러스트 설치를 따랐다면 Cargo도 설치되어 있을 것입니다.
      </p>
    </>
  );
}

export default L0C1U2;

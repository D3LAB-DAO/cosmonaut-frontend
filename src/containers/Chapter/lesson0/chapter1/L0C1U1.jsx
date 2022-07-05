import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C1U1() {
  const code1 = `
\`\`\`bash
# Remove any previous Go installation
# Replace version
$ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz

# Add /usr/local/go/bin to the PATH environment variable
$ export PATH=$PATH:/usr/local/go/bin

# verify the installation
\`\`\``;

  return (
    <>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://go.dev/doc/install">https://go.dev/doc/install</a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Go 인스톨러를 통해 쉽게 설치하실 수 있으며, 혹은 아래 설치 명령어를 통해
        설치하실 수 있습니다.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        현재 시점을 기준으로, Go v1.17+ 이상 버전을 설치하시길 추천드립니다.
      </p>
    </>
  );
}

export default L0C1U1;

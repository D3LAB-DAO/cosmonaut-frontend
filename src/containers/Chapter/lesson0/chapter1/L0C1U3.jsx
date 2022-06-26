import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C1U3() {
  const code1 = `
\`\`\`bash
$ cargo --version
\`\`\``;

  return (
    <>
      <p class="font-normal lg:text-base text-sm mb-4">
        카고는 러스트의 패키지 매니저입니다. 필요로 하는 라이브러리를
        다운로드하고 빌드하는 등의 활동을 카고를 통해서 편하게 수행할 수
        있습니다.
      </p>
      <MDEditor.Markdown
        style={{ padding: 0 }}
        source={code1}
        linkTarget="_blank"
      />
    </>
  );
}

export default L0C1U3;

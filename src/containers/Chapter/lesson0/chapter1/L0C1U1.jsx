import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import BasicA from "../../../../components/Contents/BasicA";
import Markdown from "../../../../components/Contents/Markdown";

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
    <React.Fragment>
      <Markdown code={code1} />
      <BasicA>
        <a href="https://go.dev/doc/install">https://go.dev/doc/install</a>
      </BasicA>
      <BasicP>
        You can install Go easily with the Go installer, or you can install it
        with the following installation command.
      </BasicP>
      <BasicP>It is recommended to install Go v1.17+ or higher.</BasicP>
    </React.Fragment>
  );
}

export default L0C1U1;

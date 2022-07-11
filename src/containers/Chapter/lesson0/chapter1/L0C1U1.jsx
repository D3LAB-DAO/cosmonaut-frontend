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
    <React.Fragment>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://go.dev/doc/install">https://go.dev/doc/install</a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        You can install Go easily with the Go installer, or you can install it
        with the following installation command.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        It is recommended to install Go v1.17+ or higher.
      </p>
    </React.Fragment>
  );
}

export default L0C1U1;

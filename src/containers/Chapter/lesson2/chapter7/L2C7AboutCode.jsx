import React from "react";
import AboutCode from "../../../../components/Contents/AboutCode";
import BasicP from "../../../../components/Contents/BasicP";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../components/Contents/ListStyle";

function L2C7AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>The features and data to add are as follows:</BasicP>
      <ListStyle>
        <li>
          Data for the weight of each freight,{" "}
          <CodeBlock>unit_weight</CodeBlock>.
        </li>
        <li>
          <CodeBlock>SetTokenExtension</CodeBlock> function to set the{" "}
          <CodeBlock>unit_weight</CodeBlock>.
        </li>
        <li>
          <CodeBlock>TokenExtension</CodeBlock> for query.
        </li>
      </ListStyle>
    </div>
  );
}

export default L2C7AboutCode;

import React from "react";
import ChapterDesc from "../../../../components/Contents/ChapterDesc";
import Header from "../../../../components/Contents/Header";
import ListStyle from "../../../../components/Contents/ListStyle";

function L1C2AboutCode() {
  return (
    <div class="block mx-4">
      <Header>About Code</Header>
      <ChapterDesc>
        CW721 Basic은 CW721 Spec에서 다뤘던 다음 내용들을 구현하고 있습니다:
      </ChapterDesc>
      <ListStyle>
        <li>CW721 Base</li>
        <li>Metadata 확장</li>
        <li>Enumerable 확장</li>
      </ListStyle>
    </div>
  );
}

export default L1C2AboutCode;

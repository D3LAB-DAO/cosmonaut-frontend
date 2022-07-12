import React from "react";
import AboutCode from "../../../components/Contents/AboutCode";
import BasicP from "../../../components/Contents/BasicP";
import ListStyle from "../../../components/Contents/ListStyle";

function L1C13AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>
        CW721 Spec은 여러 구역으로 나뉘어 있습니다. 컨트랙트는 이 모든 기능성을
        구현할 필요는 없으나, Base로 분류되어 있는 구역은 모두 구현해야 합니다.
      </BasicP>
      <ListStyle>
        <li>Base</li>
        <li>Metadata</li>
        <li>Enumerable</li>
      </ListStyle>
    </div>
  );
}

export default L1C13AboutCode;

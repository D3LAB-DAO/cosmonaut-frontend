import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";

function L1Desc() {
  return (
    <>
      <ChapterDesc>
        CW721은 코즘와즘에 기반을 둔 대체불가능토큰의 표준입니다. 그 이름과
        디자인은 이더리움의 ERC721 표준을 준수하고 있으면서도, 이더리움과 다른
        코스모스 블록체인의 특징에 맞는 일부 추가적인 확장을 포함하고 있습니다.
        <br />
        <br />
        CW721 Spec에 정의되어 있는 타입들은 표준 CW721 컨트랙트를 구현하거나
        호출하기 위해 참고될 수 있습니다. 즉 CW721 그 자체로는 껍데기에
        불과하며, 이 표준 스펙을 참고해 다른 NFT 컨트랙트를 호출하거나, 본인의
        서비스에 따라 구현을 채우면 됩니다.
        <br />
        <br />
      </ChapterDesc>
    </>
  );
}

export default L1Desc;

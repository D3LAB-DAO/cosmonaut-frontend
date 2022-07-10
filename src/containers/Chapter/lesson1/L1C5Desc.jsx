import React from "react";

function L1C5Desc() {
  return (
    <div>
      <h1 class="w-full lg:text-lg text-sm text-white font-normal place-content-center">
        앞서 배운 CW721-base를 이용해 NFT를 만들어봅시다. 네, 드디어 개척을 위한
        우주선 ESFERA를 만들 시간입니다!
        <br />
        <br />
        필수적인 기능과 약간의 확장은 이미 CW721-base에 훌륭히 구현되어 있기
        때문에, 약간의 커스텀 ExecuteMsg와 QueryMsg만으로도 쉽게 NFT를 만들 수
        있습니다.
        <br />
        <br />
        메타데이터의 조회는 어차피 NftInfo나 AllNftInfo로 가능하기 때문에,
        체력을 조회하기 위한 추가 QueryMsg는 필요 없습니다.
        <br />
        <br />
        체력 감소 기능을 위한 ExecuteMsg인 DecreaseHealth를 하나 추가해야겠네요.
      </h1>
    </div>
  );
}

export default L1C5Desc;

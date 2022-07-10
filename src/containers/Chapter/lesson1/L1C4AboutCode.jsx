import React from "react";

function L1C4AboutCode() {
  return (
    <div class="block mx-4">
      <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
        CW721 Basic 혹은 CW721-base는 이전 장에서 다뤘던 CW721 Spec의 기본
        컨트랙트 구현체입니다. 이를 이용해서 쉽게 NFT를 만들거나 다른 NFT 기반
        응용프로그램이 필요할 때 베이스 코드로 삼을 수 있도록 보조합니다.
      </h1>
      <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
        CW721 Basic은 CW721 Spec에서 다뤘던 다음 내용들을 구현하고 있습니다.
      </h1>
      <ul class="list-disc text-xl font-bold ml-4 mt-3">
        <li>CW721 Base</li>
        <li>Metadata 확장</li>
        <li>Enumerable 확장</li>
      </ul>
    </div>
  );
}

export default L1C4AboutCode;

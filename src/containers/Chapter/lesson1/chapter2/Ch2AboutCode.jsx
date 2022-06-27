import React from "react";

function Ch2AboutCode() {
  return (
    <div class="block mx-4">
      <h1 class="w-full text-2xl font-heading place-content-center mb-2">
        About Code
      </h1>
      <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
        CW721 Basic은 CW721 Spec에서 다뤘던 다음 내용들을 구현하고 있습니다:
      </h1>
      <ul class="list-disc text-lg font-normal ml-4 mt-3">
        <li>CW721 Base</li>
        <li>Metadata 확장</li>
        <li>Enumerable 확장</li>
      </ul>
      <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
        msg.rs의 ExecuteMsg와 QueryMsg는 CW721 spec을 따라 구현되었으나, 이 스펙
        외에도 추가된 것들이 있습니다.
      </h1>
      <ul class="list-disc xl:text-lg md:text-sm text-xs font-normal ml-4 mt-3">
        <li>
          InstantiateMsg: 이름과 심볼을 메타데이터로써 가지고, Minter 주소도
          가집니다. Minter는 새 NFT를 발행할 수 있는 강력한 권한이 있습니다.
          그러나 이미 발행된 NFT를 수정할 수는 없습니다.
        </li>
        <li>
          {/* <pre>ExecuteMsg::Mint{(token_id, owner, token_uri)}</pre>: 주어진 */}
          owner에게 새 토큰을 만들어줍니다. 선택적으로 메타데이터도 넣을 수
          있습니다. 이는 오직 instantiate에서 설정된 Minter에게서만 호출될 수
          있습니다.
        </li>
        <li>QueryMsg::Minter: 이 컨트랙트의 Minter 주소를 반환합니다.</li>
      </ul>
    </div>
  );
}

export default Ch2AboutCode;

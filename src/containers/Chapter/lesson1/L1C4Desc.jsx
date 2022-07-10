import React from "react";

function L1C4Desc() {
  const executeMsg = "ExecuteMsg::Mint{(token_id, owner, token_uri)}:";
  return (
    <div>
      <h1 class="w-full text-2xl font-heading place-content-center mb-2">
        Execution
      </h1>
      <h1 class="w-full font-normal place-content-center lg:text-lg text-sm">
        msg.rs의 ExecuteMsg와 QueryMsg는 CW721 spec을 따라 구현되었으나, 이 스펙
        외에도 추가된 것들이 있습니다.
      </h1>
      <ul class="list-disc text-xl font-bold ml-4 mt-3">
        <li>
          InstantiateMsg: 이름과 심볼을 메타데이터로써 가지고, Minter 주소도
          가집니다. Minter는 새 NFT를 발행할 수 있는 강력한 권한이 있습니다.
          그러나 이미 발행된 NFT를 수정할 수는 없습니다.
        </li>
        <li>
          {executeMsg} 주어진 owner에게 새 토큰을 만들어줍니다. 선택적으로
          메타데이터도 넣을 수 있습니다. 이는 오직 instantiate에서 설정된
          Minter에게서만 호출될 수 있습니다.
        </li>
        <li>QueryMsg::Minter{}: 이 컨트랙트의 Minter 주소를 반환합니다.</li>
      </ul>
    </div>
  );
}

export default L1C4Desc;

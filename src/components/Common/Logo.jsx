import React from "react";
import LogoV4 from "../../assets/images/logo-v4.svg";

function Logo() {
  return (
    <>
      <a class="text-lg font-bold" href="/cosmonaut-frontend">
        <img class="md:h-9 h-8 py-1" src={LogoV4} alt="" width="auto" />
      </a>
    </>
  );
}

export default Logo;

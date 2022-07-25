import React from "react";
import LogoV4 from "../../../assets/images/logo-v4.svg";

const Logo = () => {
  return (
    <>
      <div class="text-lg font-bold ease-in-out duration-300  transform hover:scale-110">
        <img class="md:h-9 h-8 py-1" src={LogoV4} alt="" width="auto" />
      </div>
    </>
  );
};

export default Logo;

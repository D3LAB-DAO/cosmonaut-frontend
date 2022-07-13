import React from "react";

function Header(props) {
  return (
    <>
      <p class="flex font-bold lg:text-2xl text-2xl">{props.children}</p>
    </>
  );
}

export default Header;

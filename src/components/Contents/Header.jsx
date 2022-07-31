import React from "react";

function Header(props) {
  return (
    <>
      <p class="flex font-bold text-2xl my-2">{props.children}</p>
    </>
  );
}

export default Header;

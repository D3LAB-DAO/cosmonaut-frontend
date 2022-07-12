import React from "react";

function Header(props) {
  return (
    <div>
      <p class="flex font-bold lg:text-2xl text-2xl mb-1">{props.children}</p>
    </div>
  );
}

export default Header;

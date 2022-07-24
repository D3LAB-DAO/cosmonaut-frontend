import React, { useState } from "react";

function HandleSideMenu() {
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(!sideMenu);
  return (
    <>
      <button
        onClick={showSideMenu}
        class="navbar-burger text-indigo-900 hover:text-orange-400"
      >
        <svg
          class="block mb-1 md:h-6 md:w-6 w-5 h-5 md:mr-4 mr-2"
          fill="black"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </>
  );
}

export default HandleSideMenu;

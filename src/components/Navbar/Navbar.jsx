import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import Account8 from "../../assets/images/account8.svg";

import Logo from "../Common/Logo";
import Version from "../Common/Version";

const Container = tw.div`fixed top-0 w-full z-50`;

function Navbar() {
  return (
    <Container>
      <nav class="transition delay-200 ease-in-out duration-200 opacity-0 flex hover:opacity-100 focus:opacity-100 justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl">
        <Logo />
        <div class="xl:hidden flex items-center">
          <Version />

          {/* 클릭 시, MyPage로 이동 */}
          <Link to="/profile">
            <button class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm">
              <img src={Account8} alt="" width="auto" />
            </button>
          </Link>
        </div>
        <div class="hidden xl:flex items-center">
          <Version />
          <Link to="/profile">
            <button class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm">
              <img src={Account8} alt="" width="auto" />
            </button>
          </Link>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import Account8 from "../../assets/images/account8.svg";

import LogoV4 from "../../assets/images/logo-v4.svg";
import Version from "../Common/Version";

const Container = tw.div`fixed top-0 w-full z-50`;
const Logo = tw.a`text-lg font-bold ease-in-out duration-300 transform hover:scale-110`;

function Navbar() {
  const [login, setLogin] = useState(false);

  window.addEventListener("scroll", e => {
    if (window.scrollY > 1) {
      const navbar = document.querySelectorAll("#navbar");
      navbar[0].classList.add("opacity-0");
      navbar[0].classList.remove("opacity-100");
    } else {
      const navbar = document.querySelectorAll("#navbar");
      navbar[0].classList.add("opacity-100");
      navbar[0].classList.remove("opacity-0");
    }
  });

  return (
    <Container>
      <nav
        id="navbar"
        class="transition delay-200 ease-in-out duration-200 hover:opacity-100 focus:opacity-100 flex justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl"
      >
        <Logo href="/cosmonaut-frontend">
          <img class="md:h-9 h-8 py-1" src={LogoV4} alt="" width="auto" />
        </Logo>

        {login ? (
          <div class="flex items-center">
            <Version />
            <Link to="/profile">
              <button class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm ease-in-out duration-300  transform hover:scale-110">
                <img src={Account8} alt="" width="auto" />
              </button>
            </Link>
          </div>
        ) : (
          <div class="flex items-center">
            <Version />
            <Link to="/signUp">
              <button class="block w-7 h-7 rounded-full border-2 border-indigo-900 shadow-sm ease-in-out duration-300  transform hover:scale-110">
                <img src={LogoV4} alt="" width="auto" />
              </button>
            </Link>
          </div>
        )}
      </nav>
    </Container>
  );
}

export default Navbar;

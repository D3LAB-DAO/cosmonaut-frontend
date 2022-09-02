import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import tw from "tailwind-styled-components";
import LogoV4 from "../../assets/images/logo-v4.svg";
import { LoginState } from "../../states/login";
import Profile from "../Common/Profile";
import SignIn from "../Common/SignIn";

const Container = tw.div`fixed top-0 w-full z-50`;
const Logo = tw.a`text-lg font-bold ease-in-out duration-300 transform hover:scale-110`;

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const loginCheck = async () => {
    try {
      const opt = {
        method: "GET",
        credentials: "include",
      };
      let res = await fetch("http://127.0.0.1:8080/auth/check", opt);
      const data = await res.json();

      const onLogin = data.isLogin;
      setIsLoggedIn(onLogin);
    } catch (error) {
      console.log(error);
    }
  };
  loginCheck();

  window.addEventListener("scroll", (e) => {
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
        <Logo href="/">
          <img class="md:h-9 h-8 py-1" src={LogoV4} alt="" width="auto" />
        </Logo>

        {isLoggedIn ? (
          <Profile />
        ) : (
          <div class="flex items-center">
            <Link to="/signUp">
              <SignIn />
            </Link>
          </div>
        )}
      </nav>
    </Container>
  );
}

export default Navbar;

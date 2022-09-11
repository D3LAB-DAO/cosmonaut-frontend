import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Account3 from "../../assets/images/signed-in-account3.svg";
import { useIsLogout } from "../../libs/api/useIsLogout";

import { LoginState } from "../../states/login";
import Version from "./Version";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const logoutFetch = useIsLogout();
  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    logoutFetch();
  };

  return (
    <>
      {/* Small Version */}
      <div class="xl:hidden flex items-center">
        <Version />
        <div class="relative inline-block text-left ">
          <div>
            <button
              class="focus:outline-none ml-1 rounded-full text-white hover:text-indigo-800 ease-in-out duration-300 focus:ring-2 focus:ring-orange-400 transform hover:scale-110"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <img
                class="w-7 h-7 block rounded-full border-3 border-indigo-900 object-cover"
                src={Account3}
                alt=""
              />
              <span class="sr-only">Open options</span>
            </button>
          </div>
          <div
            class="opacity-0 hover:opacity-100 origin-top-right absolute right-0 mt-1 w-24 rounded-md bg-white ring-1 border-2 border-black shadow-sm ring-black ring-opacity-5 focus:outline-none text-right"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 px-1" role="none">
              <Link to="/profile">
                <div
                  class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-yellow-500"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  mypage
                </div>
              </Link>
              <button onClick={handleLogOut}>
                <div
                  class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-orange-500"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  sign out
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Big Version */}
      {/* {logout ? (
        <div class="flex items-center">
          <Link to="/signUp">
            <SignIn />
          </Link>
        </div>
      ) : ( */}
      <div class="hidden xl:flex items-center">
        <Version />
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="focus:outline-none rounded-sm ml-2 flex items-center ease-in-out duration-300 focus:ring-2 focus:ring-orange-400  transform hover:scale-110"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <img
                class="w-8 h-8 block rounded-full border-3 border-indigo-900 shadow-sm object-cover ml-1 "
                src={Account3}
                alt=""
              />
              <span class="text-sm font-semibold ml-2 mr-4">@d3lab</span>
              <span class="sr-only">Open options</span>
            </button>
          </div>
          <div
            class="opacity-0 hover:opacity-100 origin-top-right absolute right-0 mt-1 w-32 rounded-md bg-white ring-1 border-4 border-black shadow-md ring-black ring-opacity-5 focus:outline-none text-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 px-1" role="none">
              <Link to="/profile">
                <div
                  class="text-gray-700 bg-white text-center font-heading rounded-sm block px-4 py-2 text-sm hover:bg-yellow-500"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  mypage
                </div>
              </Link>
              <button onClick={handleLogOut}>
                <div
                  class="text-gray-700 bg-white text-center font-heading rounded-sm block px-4 py-2 text-sm hover:bg-orange-500"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  sign out
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Profile;

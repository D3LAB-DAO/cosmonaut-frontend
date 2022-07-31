import React from "react";
import Account3 from "../../assets/images/signed-in-account3.svg";
import Logo from "../Common/Icon/Logo";

const TestNavbar = () => {
  return (
    <>
      <section>
        {/* Hovering Navbar */}
        <div class="fixed top-0 w-full z-50">
          <nav class="transition delay-200 ease-in-out duration-200 opacity-0 hover:opacity-100 focus:opacity-100 flex justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl">
            <Logo />
            {/* Small Version */}
            <div class="xl:hidden flex items-center">
              <div class="inline-block relative md:mr-2 mr-1 mt-1">
                <select class="appearance-none block bg-white bg-opacity-0 text-white text-xs font-semibold duration-200 px-2 py-0.5 pr-8 leading-6 ease-in-out transform hover:scale-110">
                  <option>ENG</option>
                  <option>KOR</option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-white">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </div>
              <div class="relative inline-block text-left">
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
                  class="origin-top-right absolute right-0 mt-3 w-24 rounded-md bg-white ring-1 border-2 border-black shadow-sm ring-black ring-opacity-5 focus:outline-none text-right"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1 px-1" role="none">
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-yellow-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      mypage
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-orange-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Big Version */}
            <div class="hidden xl:flex items-center">
              <div class="inline-block relative mr-2 mt-1">
                <select class="appearance-none block bg-white bg-opacity-0 text-white text-sm font-semibold duration-200 px-3 py-0.5 pr-8 leading-6 ease-in-out duration-300  transform hover:scale-110">
                  <option>ENG</option>
                  <option>KOR</option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </div>
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
                  class="origin-top-right absolute right-0 mt-4 w-32 rounded-md bg-white ring-1 border-4 border-black shadow-md ring-black ring-opacity-5 focus:outline-none text-right"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1 px-1" role="none">
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-sm hover:bg-yellow-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      mypage
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-sm hover:bg-orange-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Top Fixed Navbar */}
        <div class="w-full">
          <nav class="flex justify-between items-center lg:py-3 py-2 md:px-6 xl:px-10 px-6 relative bg-gray-700 shadow-xl ">
            <Logo />
            {/* Small Version */}
            <div class="xl:hidden flex items-center">
              <div class="inline-block relative md:mr-2 mr-1 mt-1">
                <select class="appearance-none block bg-white bg-opacity-0 text-white text-xs font-semibold duration-200  px-2 py-0.5 pr-8 leading-6 ease-in-out transform hover:scale-110">
                  <option>ENG</option>
                  <option>KOR</option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-white">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </div>
              <div class="relative inline-block text-left">
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
                  class="origin-top-right absolute right-0 mt-3 w-24 rounded-md bg-white ring-1 border-2 border-black shadow-sm ring-black ring-opacity-5 focus:outline-none text-right"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1 px-1" role="none">
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-yellow-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      mypage
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-xs hover:bg-orange-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Big Version */}
            <div class="hidden xl:flex items-center">
              <div class="inline-block relative mr-2 mt-1">
                <select class="appearance-none block bg-white bg-opacity-0 text-white text-sm font-semibold duration-200  px-3 py-0.5 pr-8 leading-6 ease-in-out  transform hover:scale-110">
                  <option>ENG</option>
                  <option>KOR</option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </div>
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
                  class="origin-top-right absolute right-0 mt-4 w-32 rounded-md bg-white ring-1 border-4 border-black shadow-md ring-black ring-opacity-5 focus:outline-none text-right"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1 px-1" role="none">
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-sm hover:bg-yellow-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      mypage
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 bg-white font-heading rounded-sm block px-4 py-2 text-sm hover:bg-orange-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default TestNavbar;

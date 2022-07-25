import React from "react";
import LogoV4LineShadow from "../../../assets/images/logo-v4-line-shadow.svg";
import tw from "tailwind-styled-components";

const Logo = tw.a`mr-auto text-2xl font-bold leading-none`;
const CloseBtn = tw.button``;
const List = tw.div``;

function SideMenu() {
  return (
    <>
      <div class="navbar-menu relative z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm">
          <div class="block m-6 py-4 px-4 border-4 border-orange-400 h-full bg-white shadow rounded-xl">
            <div class="flex items-center mt-1 mb-6">
              <Logo>
                <img class="h-10" src={LogoV4LineShadow} alt="" width="auto" />
              </Logo>
              <CloseBtn class="navbar-close">
                <svg
                  class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </CloseBtn>
            </div>
            <List>
              <ul class="space-y-2 h-720px overflow-y-auto">
                <li class="px-6 md:pr-10 hover:bg-gray-50 rounded-lg">
                  <div>
                    <button class="w-full p-3 flex justify-between text-gray-700 hover:text-orange-400 items-center text-left">
                      <span class="block text-lg font-heading rounded">
                        Lesson 0
                      </span>
                      <svg
                        class="flex-shrink-0"
                        width="18"
                        height="10"
                        viewbox="0 0 18 10"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.18072 9C0.90872 9.268 0.471719 9.268 0.201719 9C-0.0682816 8.732 -0.069281 8.299 0.201719 8.031L8.10972 0.201C8.37972 -0.0670004 8.81672 -0.0670004 9.08872 0.201L16.9967 8.031C17.2667 8.299 17.2667 8.732 16.9967 9C16.7257 9.268 16.2877 9.268 16.0177 9L8.59872 1.859L1.18072 9Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <ul class="text-left border-t-2 border-gray-100 pl-6 font-heading text-xs pt-4 pb-6">
                      <li class="mb-4  text-gray-700 hover:text-orange-400">
                        <a href="/">Chp.1 Install Go &amp; Rust</a>
                      </li>
                      <li class="mb-4  text-gray-700 hover:text-orange-400">
                        <a href="/">Chp.2 Wasm / Wasmd</a>
                      </li>
                      <li class="mb-4  text-gray-700 hover:text-orange-400">
                        <a href="/">Chp.3 Testnet(Cliffnet)</a>
                      </li>
                      <li class="text-gray-700 hover:text-orange-400">
                        <a href="/">Chp.4 Interaction with Contract</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </List>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideMenu;

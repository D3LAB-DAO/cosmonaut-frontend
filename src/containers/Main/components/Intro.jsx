import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import Icon1 from "../../../assets/images/icon1.gif";
import Icon2 from "../../../assets/images/icon2.gif";
import Icon3 from "../../../assets/images/icon3.gif";

const Section = tw.section`relative`;
const Backgrounds = tw.div`md:pb-16 pb-8 bg-cover bg-fixed`;
const Background = tw.div`bg-scroll bg-contain bg-center bg-no-repeat bg-opacity-50 container mx-auto relative mt-2 pb-0`;
const Wrap = tw.div`flex flex-wrap justify-center px-10`;

function Intro() {
  return (
    <Section>
      <Backgrounds
        style={{
          backgroundImage: `url(${require("../../../assets/images/bg1-compress4.gif")})`,
        }}
      >
        <Background
          style={{
            backgroundImage: `url(${require("../../../assets/images/spacetrip.gif")})`,
          }}
        >
          <div class="mx-auto text-center px-8 lg:pt-32 lg:pb-12 md:pt-16 md:pb-6 pt-12 pb-8 md:mb-4">
            <span class="text-orange-500 font-semibold text-base lg:text-2xl md:text-xl">
              Become a pioneer of Cosmos!
            </span>
            <h1 class="font-heading mt-4 mb-6 text-4xl md:text-6xl">
              COSMONAUT
            </h1>
            <p class="lg:text-lg md:text-md mb-10 leading-relaxed mx-4 md:mx-12 lg:mx-32">
              Cosmonaut is a coding school where you can experience creating
              Cosmwasm contracts and DApps while making NFT games.
              <br /> Learners can expect to achieve the following:
            </p>
            <div class="flex flex-wrap justify-center md:mb-10 mb-6">
              <Link to="/index">
                <button class="animate-moveUtoD inline-block md:w-auto mb-2 md:mb-0 md:mr-4 text-center text-lg border-3 shadow rounded-full bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:to-blue-500 hover:text-white w-2/3 md:px-12 px-6 py-2 lg:py-4 md:py-3">
                  START LESSON
                </button>
              </Link>
            </div>
          </div>
        </Background>
        <Wrap>
          <div class="animate-fadeInDtoU max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon1}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                Contract
              </h4>
              <ul class="list-disc text-md font-medium ml-5 mt-3 text-left">
                <li>Learn how to create a Cosmwasm contract.</li>
                <li>Meet CW20 and CW721. Then, use them.</li>
              </ul>
            </div>
          </div>

          <div class="animate-fadeInDtoU max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon2}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                Rust Language
              </h4>
              <p class="px-4 text-white lg:text-base leading-tight">
                Get familiar with Rust.
              </p>
            </div>
          </div>

          <div class="animate-fadeInDtoU max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon3}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                DApp
              </h4>
              <p class="px-4 text-white lg:text-base leading-tight">
                Create a DApp by connecting the frontend to your contracts through
                CosmJS.
              </p>
            </div>
          </div>
        </Wrap>
      </Backgrounds>
    </Section>
  );
}

export default Intro;

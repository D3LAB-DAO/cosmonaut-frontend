import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import Icon1 from "../../../assets/images/icon1.svg";
import Icon2 from "../../../assets/images/icon2.svg";
import Icon3 from "../../../assets/images/icon3.svg";
import Button from "../../../components/Common/Icon/Button";

const Section = tw.section`relative`;
const Backgrounds = tw.div`md:pb-16 pb-8 bg-cover bg-fixed`;
const Background = tw.div`bg-scroll bg-contain bg-center bg-no-repeat bg-opacity-50 container mx-auto relative mt-2 pb-0`;
const Wrap = tw.div`flex flex-wrap justify-center px-10`;

function Intro() {
  // useEffect(() => {
  //   const leftCallback = function (entries) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersection) {
  //         entry.target.classList.add("animate-fadeInLtoR");
  //       } else {
  //         entry.target.classList.remove("animate-fadeInLtoR");
  //       }
  //     });
  //   };
  //   const leftObserver = new IntersectionObserver(leftCallback);

  //   const left = document.querySelectorAll("#left");
  //   left.forEach(function (target) {
  //     leftObserver.observe(target);
  //   });
  // }, []);

  // useEffect(() => {
  //   const rightCallback = function (entries) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersection) {
  //         entry.target.classList.add("animate-fadeInRtoL");
  //       } else {
  //         entry.target.classList.remove("animate-fadeInRtoL");
  //       }
  //     });
  //   };
  //   const rightObserver = new IntersectionObserver(rightCallback);
  //   const right = document.querySelectorAll("#right");
  //   right.forEach(function (target) {
  //     rightObserver.observe(target);
  //   });
  // }, []);

  // useEffect(() => {
  //   const downCallback = function (entries) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersection) {
  //         entry.target.classList.add("animate-fadeInDtoU");
  //       } else {
  //         entry.target.classList.remove("animate-fadeInDtoU");
  //       }
  //     });
  //   };
  //   const downObserver = new IntersectionObserver(downCallback);
  //   const down = document.querySelectorAll("#down");
  //   down.forEach(function (target) {
  //     downObserver.observe(target);
  //   });
  // }, []);

  const leftCallback = function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersection) {
        entry.target.classList.add("animate-fadeInLtoR");
      } else {
        entry.target.classList.remove("animate-fadeInLtoR");
      }
    });
  };
  const leftObserver = new IntersectionObserver(leftCallback);

  const left = document.querySelectorAll("#left");
  left.forEach(function (target) {
    leftObserver.observe(target);
  });

  const rightCallback = function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersection) {
        entry.target.classList.add("animate-fadeInRtoL");
      } else {
        entry.target.classList.remove("animate-fadeInRtoL");
      }
    });
  };
  const rightObserver = new IntersectionObserver(rightCallback);
  const right = document.querySelectorAll("#right");
  right.forEach(function (target) {
    rightObserver.observe(target);
  });

  const downCallback = function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersection) {
        entry.target.classList.add("animate-fadeInDtoU");
      } else {
        entry.target.classList.remove("animate-fadeInDtoU");
      }
    });
  };
  const downObserver = new IntersectionObserver(downCallback);
  const down = document.querySelectorAll("#down");
  down.forEach(function (target) {
    downObserver.observe(target);
  });

  return (
    <Section>
      <Backgrounds
        style={{
          backgroundImage: `url(${require("../../../assets/images/space4Artboard-22.png")})`,
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
            <p class="lg:text-lg md:text-md mb-10 leading-relaxed mx-4 md:mx-12 lg:mx-32 text-xs">
              Cosmonaut is a coding school where you can experience creating
              Cosmwasm contracts and DApps while making NFT games yourself.
              <br /> Learners can expect to achieve the following:
            </p>
            <div class="flex flex-wrap justify-center md:mb-10 mb-6">
              <Link to="/lesson/0">
                <Button />
              </Link>
            </div>
          </div>
        </Background>
        <Wrap>
          <div id="left" class="max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon1}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                Contract
              </h4>
              <p class="px-4 text-white lg:text-base leading-tight text-xs">
                Learn how to create a Cosmwasm contract. Meet CW20 and CW721.
              </p>
            </div>
          </div>

          <div id="down" class="max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon2}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                Rust Language
              </h4>
              <p class="px-4 text-white lg:text-base leading-tight text-xs">
                Get familiar with Rust. Let's do some unit testing and
                optimization, too.
              </p>
            </div>
          </div>

          <div id="right" class="max-w-xs md:w-1/3 lg:px-4 mb-6 px-12 md:px-2">
            <div class="h-full md:py-6 lg:px-4 px-2 bg-gray-700 bg-opacity-50 border-2 border-dashed border-gray-100 text-center py-6 rounded-lg md:rounded-xl lg:rounded-2xl">
              <img
                class="block h-10 mx-auto md:mb-4 mb-2 lg:h-20 md:h-16"
                src={Icon3}
                alt=""
              />
              <h4 class="lg:text-2xl text-md text-white font-heading md:mb-4 mb-2">
                DApp
              </h4>
              <p class="px-4 text-white lg:text-base leading-tight text-xs">
                Create a DApp by connecting frontend to your contracts through
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

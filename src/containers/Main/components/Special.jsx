import React, { useEffect } from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`py-26 bg-orange-200 pb-32`;

function Special() {
  useEffect(() => {
    const firstCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpFirst");
        } else {
          entry.target.classList.remove("lg:animate-goUpFirst");
        }
      });
    };
    const firstObserver = new IntersectionObserver(firstCallback);
    const first = document.querySelectorAll("#first");
    first.forEach(function (target) {
      firstObserver.observe(target);
    });

    const secondCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpSecond");
        } else {
          entry.target.classList.remove("lg:animate-goUpSecond");
        }
      });
    };
    const secondObserver = new IntersectionObserver(secondCallback);
    const second = document.querySelectorAll("#second");
    second.forEach(function (target) {
      secondObserver.observe(target);
    });

    const thirdCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpThird");
        } else {
          entry.target.classList.remove("lg:animate-goUpThird");
        }
      });
    };
    const thirdObserver = new IntersectionObserver(thirdCallback);
    const third = document.querySelectorAll("#third");
    third.forEach(function (target) {
      thirdObserver.observe(target);
    });

    const fourthCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lg:animate-goUpFourth");
        } else {
          entry.target.classList.remove("lg:animate-goUpFourth");
        }
      });
    };
    const fourthObserver = new IntersectionObserver(fourthCallback);
    const fourth = document.querySelectorAll("#fourth");
    fourth.forEach(function (target) {
      fourthObserver.observe(target);
    });
  }, []);
  return (
    <Container>
      <div class="container lg:px-4 px-12 mx-auto">
        <div class="max-w-3xl mx-auto text-center mb-16 pb-10">
          <h1 class="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            What is so special?
          </h1>
          <p class="leading-7 text-sm md:text-lg text-green-500 font-semibold">
            Learn Cosmwasm's secure multi-chain contract. Cosmonaut is made to
            be easy to follow, even for unfamiliar ones with Cosmos, Cosmwasm,
            and Rust. Don't worry and just follow us! Let's deep dive into the
            world of Cosmos with our pretty and kind explanations.
          </p>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-8">
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div
              id="first"
              class=" flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-orange-400 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-heading font-extrabold mb-3 text-3xl">
                  Bottom-UP
                </h3>
                <h4 class="font-extrabold text-md">
                  Step-by-step lectures in bottom-up configuration, insinuating
                  into the “pioneer” story.
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:translate-y-8">
            <div
              id="second"
              class="flex items-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center justify-center bg-yellow-600 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-heading font-extrabold mb-3 text-3xl">
                  2 Division
                </h3>
                <h4 class="font-extrabold text-md">
                  Two-side split screen for concurrent learning and practice.
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:translate-y-16">
            <div
              id="third"
              class="flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-green-500 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-heading font-extrabold mb-3 text-3xl">Game</h3>
                <h4 class="font-extrabold text-md">
                  Create a real game: coding with Rust, writing and deploying
                  contracts, and connecting to the frontend.
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:transform lg:-translate-y-8">
            <div
              id="fourth"
              class="flex items-center justify-center p-6 border-3 border-indigo-900 rounded-2xl shadow-md text-center bg-blue-500 lg:h-96 md:h-56 h-48"
            >
              <div>
                <h3 class="font-heading font-extrabold mb-3 text-3xl">Level</h3>
                <h4 class="font-extrabold text-md">
                  Experience unit testing and optimization at the product level.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Special;

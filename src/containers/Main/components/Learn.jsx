import React, { useEffect } from "react";
import Chapterscreen from "../../../assets/images/chapter-screen.png";

function Learn() {
  useEffect(() => {
    const leftCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInLtoR");
        } else {
          entry.target.classList.remove("animate-fadeInLtoR");
        }
      });
    };
    const rightCallback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInRtoL");
        } else {
          entry.target.classList.remove("animate-fadeInRtoL");
        }
      });
    };

    const leftObserver = new IntersectionObserver(leftCallback);
    const rightObserver = new IntersectionObserver(rightCallback);

    const left = document.querySelectorAll("#left");
    left.forEach(function (target) {
      leftObserver.observe(target);
    });
    const right = document.querySelectorAll("#right");
    right.forEach(function (target) {
      rightObserver.observe(target);
    });
  }, []);

  return (
    <section id="container" class="py-40 bg-green-500">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4 items-start">
          <div
            id="left"
            class=" marker:w-full lg:w-1/2 lg:px-4 px-8 mb-8 lg:mb-0"
          >
            <h1 class="max-w-xl text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-8">
              Learn and Create
            </h1>
            <div class="flex flex-wrap -mx-4 -mb-10">
              <div class="w-full px-4 mb-12">
                <div class="md:-pr-32">
                  <p class="leading-7 font-medium md:text-lg text-sm lg:mr-10">
                    Learn Cosmwasm's secure multi-chain contract. Cosmonaut is
                    made to be easy to follow, even for unfamiliar one with
                    Cosmos, Cosmwasm, and Rust. Don't worry and just follow us!
                    Let's deep dive into the world of Cosmos with our pretty and
                    kind explanations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="right" class="w-full lg:w-1/2 px-4">
            <img
              class="block w-full h-128 object-cover border-3 border-indigo-900 rounded-2xl md:shadow shadow-sm"
              src={Chapterscreen}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;

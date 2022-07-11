import React from "react";
import tw from "tailwind-styled-components";
import Whiteline from "../../../assets/images/vertical-whiteline.gif";

const Section = tw.section`py-20 bg-orange-400 h-97`;

function About() {
  return (
    <Section>
      <div class="container px-4 mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-extrabold font-heading text-yellow-100">
            About
          </h1>
        </div>
        <div class="max-w-3xl mx-auto text-center">
          <p class="lg:text-xl md:text-lg text-sm md:px-4 px-2 font-bold leading-relaxed mb-12 text-gray-50">
            Cosmonaut is a free coding school that teaches you how to create and
            deploy contracts on Cosmos ecosystem.
            <br />
            <br />
            Learn Cosmwasm's secure multi-chain contract. Cosmonaut is made to
            be easy to follow, even for unfamiliar one with Cosmos, Cosmwasm,
            and Rust. <b>Don't worry and just follow us!</b> Let's deep dive
            into the world of Cosmos with our pretty and kind explanations.
          </p>
        </div>
        <img
          class="block w-40 mx-auto overflow-y-visible object-contain"
          src={Whiteline}
          alt=""
        />
      </div>
    </Section>
  );
}

export default About;

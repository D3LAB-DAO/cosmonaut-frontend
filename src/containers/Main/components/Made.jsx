import React from "react";
import tw from "tailwind-styled-components";
import D3labBg7 from "../../../assets/images/d3lab-bg7.svg";
import SignInAccount3 from "../../../assets/images/signed-in-account3.svg";

const Container = tw.div`md:py-26 py-12 bg-scroll bg-center bg-cover`;
const Circle = tw.div`w-full px-4 bg-center bg-contain bg-no-repeat`;
const Explain = tw.div`w-full md:px-4 px-10 mb-0`;

function Made() {
  return (
    <Container style={{ backgroundImage: `url(${D3labBg7})` }}>
      <div class="container px-4 mx-auto">
        <h1 class="text-3xl md:text-4xl text-center font-extrabold font-heading ">
          Who made Cosmonaut?
        </h1>
        <div class="flex flex-wrap -mx-4 items-center">
          <Circle
            style={{
              backgroundImage: `url(${require("../../../assets/images/circular3.gif")})`,
            }}
          >
            <img
              class="block mx-auto mt-4 md:mt-10 md:mb-10 mb-4 object-cover border-3 border-indigo-900 shadow-lg rounded-full md:h-64 h-40"
              src={SignInAccount3}
              alt=""
            />
          </Circle>
          <Explain>
            <div class="mb-8 max-w-2xl mx-auto mt-4 ">
              <div class="flex mb-4 items-center">
                <span class="md:text-base text-xs font-medium">
                  D3LAB is a Decentralized Autonomous Organization that studies
                  decentralized things in a decentralized manner. It was
                  established to point out that many blockchain projects contain
                  the so-called ‘inevitably’ centralized features for
                  profit-seeking and their convenience.
                </span>
              </div>
              <div class="flex mb-4 items-center">
                <span class="md:text-base text-xs font-medium">
                  We believe that Cosmos and Cosmwasm will play an important
                  role in the near multi-chain future. And Rust, the core
                  language on both the core and contract, will be an essential
                  knowledge to astronauts. However, there are not enough
                  educational materials to study them and there is no space to
                  learn as an integrated flow. That makes many learners
                  discouraged. So we make Cosmonaut to educate astronauts as
                  pioneers.
                </span>
              </div>
              <div class="flex items-center">
                <span class="md:text-base text-xs font-medium">
                  And we are working on several projects to strengthen
                  decentralization. For more information, please refer to our
                  website below. If you have any questions, please send an
                  e-mail to the following address.
                </span>
              </div>
            </div>
          </Explain>
        </div>
      </div>
    </Container>
  );
}

export default Made;

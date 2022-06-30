import React from "react";
import L1C2U11 from "./L1C2U11";
import tw from "tailwind-styled-components";
import L1C2U12 from "./L1C2U12";
import L1C2U13 from "./L1C2U13";
import L1C2U14 from "./L1C2U14";
import L1C2U15 from "./L1C2U15";

const OrangeHeader = tw.div`bg-orange-400 py-2 lg:py-6 md:py-3`;

function L1C2U1() {
  return (
    <>
      <OrangeHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              2-1. ExecuteMsg (execute.rs)
            </h1>
          </div>
        </div>
      </OrangeHeader>
      <L1C2U11 />
      <L1C2U12 />
      <L1C2U13 />
      <L1C2U14 />
      <L1C2U15 />
    </>
  );
}

export default L1C2U1;

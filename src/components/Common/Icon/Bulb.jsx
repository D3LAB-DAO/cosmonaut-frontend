import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;

function Bulb() {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="md:h-12 md:w-12 h-8 w-8"
        fill="none"
        viewbox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
        preserveAspectRatio="none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        ></path>
      </svg>
    </Container>
  );
}

export default Bulb;

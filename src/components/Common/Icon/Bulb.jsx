import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;

function Bulb() {
  return (
    <Container>
      <img src="../assets/images/light_bulb_icon.png" alt="bulb" />
    </Container>
  );
}

export default Bulb;

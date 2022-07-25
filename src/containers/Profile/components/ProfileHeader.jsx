import React from "react";
import tw from "tailwind-styled-components";
import SignInAccount3 from "../../../assets/images/signed-in-account3.svg";

const Container = tw.div`text-left mt-10 mb-16 md:px-10 px-4`;

function ProfileHeader() {
  return (
    <Container>
      <div class="mb-2">
        <img
          class="block rounded-full border-3 border-orange-400 shadow object-cover h-20 w-20"
          src={SignInAccount3}
          alt=""
        />
      </div>
      <span class="text-lg font-extrabold text-orange-400 pl-2">@d3lab</span>
      <h1 class="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-2">
        My Journey
      </h1>
      <p class="font-extrabold md:text-xl text-sm">
        See how much lessons are completed to become a pioneer of Cosmos!
      </p>
    </Container>
  );
}

export default ProfileHeader;

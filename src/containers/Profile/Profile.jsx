import React from "react";
import tw from "tailwind-styled-components";

const Header = tw.h1`mx-auto text-center mt-24 mb-20`;

function Profile() {
  return (
    <div>
      <Header>ProfilePage</Header>
    </div>
  );
}

export default Profile;

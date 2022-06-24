import React from "react";
import tw from "tailwind-styled-components";

const Header = tw.h1`mx-auto text-center mt-24 mb-20`;

function NotFound(props) {
  return (
    <div>
      <Header>Not Found</Header>
    </div>
  );
}

export default NotFound;

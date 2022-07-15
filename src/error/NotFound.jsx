import React from "react";
import tw from "tailwind-styled-components";

const Header = tw.h1`mx-auto text-center mt-24 mb-20`;

function NotFound(props) {
  return (
    <div>
      <Header>Not Found</Header>
      <h1>404 Page</h1>
    </div>
  );
}

export default NotFound;

import React from "react";
import tw from "tailwind-styled-components";

const Tab = tw.p`
mr-1 py-3 px-2 md:px-4 mb-1 overflow-auto bg-orange-400 rounded-t-md
hover:bg-blue-500 active:bg-blue-500
`;

function MultiTab(props) {
  return (
    <>
      <Tab>{props.children}</Tab>
    </>
  );
}

export default MultiTab;

// "rgb(78, 151, 183)"
// onClick={async () => setClick(!click)}

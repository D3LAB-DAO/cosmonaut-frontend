import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";

const Container = tw.div`mb-4 md:mb-4 lg:mb-8`;

const AdvTitle = () => {
  const { adID } = useParams();

  let title = "";
  switch (adID) {
    case "1":
      title = "CW2981 Royalties";
      break;
    case "2":
      title = "CW1155";
      break;
    case "3":
      title = "Create Real Random Numbers";
      break;
    default:
      break;
  }

  return (
    <Container>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
          <h2 className="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
            Advanced {adID}
          </h2>
          <h3 className="mb-2 text-xl md:text-left text-center md:text-2xl text-yellow-200 font-heading">
            {title}
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default AdvTitle;

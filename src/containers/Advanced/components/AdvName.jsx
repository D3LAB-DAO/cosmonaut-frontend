import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";

const Header = tw.div`bg-orange-500 py-2 lg:py-6 md:py-3`;

const AdvName = () => {
  const { adID, iID } = useParams();
  let index = "";
  switch (adID) {
    case "1":
      switch (iID) {
        case "1":
          index = "Metadata (lib.rs)";
          break;
        case "2":
          index = "QueryMsg";
          break;
        default:
          index = "";
      }
      break;
    case "2":
      switch (iID) {
        case "1":
          index = "CW1155 Spec :: Base";
          break;
        case "2":
          index = "CW1155 Spec :: Metadata";
          break;
        case "3":
          index = "CW1155 Spec :: Enumerable";
          break;
        default:
          break;
      }
      break;
    case "3":
      switch (iID) {
        case "1":
          index = "confio/rand";
          break;
        case "2":
          index = "Terrand";
          break;
        case "3":
          index = "How to use drand in Dapp";
          break;
        default:
          break;
      }
      break;
    default:
      index = "";
  }
  return (
    <Header>
      <div class="container px-4 mx-auto">
        <div class="text-center">
          <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
            {adID}-{iID}. {index}
          </h1>
        </div>
      </div>
    </Header>
  );
};

export default AdvName;

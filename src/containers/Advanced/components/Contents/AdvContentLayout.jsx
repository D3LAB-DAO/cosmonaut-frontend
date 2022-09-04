import React from "react";
import { useParams } from "react-router-dom";
import AdvName from "../AdvName";
import AdvContent11 from "./Adv1/AdvContent11";
import AdvContent12 from "./Adv1/AdvContent12";
import AdvContent21 from "./Adv2/AdvContent21";
import AdvContent22 from "./Adv2/AdvContent22";
import AdvContent23 from "./Adv2/AdvContent23";
import AdvContent31 from "./Adv3/AdvContent31";
import AdvContent32 from "./Adv3/AdvContent32";
import AdvContent33 from "./Adv3/AdvContent33";

const AdvContentLayout = () => {
  const { adID, iID } = useParams();

  let contents = "";
  switch (adID) {
    case "1":
      switch (iID) {
        case "1":
          contents = <AdvContent11 />;
          break;
        case "2":
          contents = <AdvContent12 />;
          break;
        default:
          contents = "";
      }
      break;
    case "2":
      switch (iID) {
        case "1":
          contents = <AdvContent21 />;
          break;
        case "2":
          contents = <AdvContent22 />;
          break;
        case "3":
          contents = <AdvContent23 />;
          break;
        default:
          break;
      }
      break;
    case "3":
      switch (iID) {
        case "1":
          contents = <AdvContent31 />;
          break;
        case "2":
          contents = <AdvContent32 />;
          break;
        case "3":
          contents = <AdvContent33 />;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return (
    <>
      <AdvName />
      <div className="bg-black">{contents}</div>
    </>
  );
};

export default AdvContentLayout;

import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import Note from "../../../../components/Common/Icon/Note";
import AdvNote11 from "./Adv1/AdvNote11";
import AdvNote12 from "./Adv1/AdvNote12";
import AdvNote21 from "./Adv2/AdvNote21";
import AdvNote22 from "./Adv2/AdvNote22";
import AdvNote23 from "./Adv2/AdvNote23";
import AdvNote31 from "./Adv3/AdvNote31";
import AdvNote32 from "./Adv3/AdvNote32";
import AdvNote33 from "./Adv3/AdvNote33";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-12 mb-8`;

const AdvNoteLayout = () => {
  const { adID, iID } = useParams();

  let note = "";
  switch (adID) {
    case "1":
      switch (iID) {
        case "1":
          note = <AdvNote11 />;
          break;
        case "2":
          note = <AdvNote12 />;
          break;
        default:
          break;
      }
      break;
    case "2":
      switch (iID) {
        case "1":
          note = <AdvNote21 />;
          break;
        case "2":
          note = <AdvNote22 />;
          break;
        case "3":
          note = <AdvNote23 />;
          break;
        default:
          break;
      }
      break;
    case "3":
      switch (iID) {
        case "1":
          note = <AdvNote31 />;
          break;
        case "2":
          note = <AdvNote32 />;
          break;
        case "3":
          note = <AdvNote33 />;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return (
    <Container>
      <div className="mx-auto px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6">
        <Note />
        <div className="flex justify-center mx-auto w-1/2 text-center mb-3 items-center">
          {note}
        </div>
      </div>
    </Container>
  );
};

export default AdvNoteLayout;

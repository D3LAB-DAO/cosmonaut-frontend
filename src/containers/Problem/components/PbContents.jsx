import React from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../../../components/CodeEditor/CodeEditor";
import UnitName from "../../../components/Common/UnitName";
import { L1C4U1Pb } from "../../Chapter/lesson1/chapter4/L1C4U1/L1C4U1Pb";
import { L1C4U2Pb } from "../../Chapter/lesson1/chapter4/L1C4U2/L1C4U2Pb";
import { L1C4U3Pb } from "../../Chapter/lesson1/chapter4/L1C4U3/L1C4U3Pb";
import { L1C5U1Pb } from "../../Chapter/lesson1/chapter5/L1C5U1/L1C5U1Pb";
import { L2C6U1Pb } from "../../Chapter/lesson2/chapter6/L2C6U1/L2C6U1Pb";
import { L2C6U2Pb } from "../../Chapter/lesson2/chapter6/L2C6U2/L2C6U2Pb";
import { L2C6U3Pb } from "../../Chapter/lesson2/chapter6/L2C6U3/L2C6U3Pb";
import { L2C6U4Pb } from "../../Chapter/lesson2/chapter6/L2C6U4/L2C6U4Pb";
import { L2C6U5Pb } from "../../Chapter/lesson2/chapter6/L2C6U5/L2C6U5Pb";
import { L2C7U1Pb } from "../../Chapter/lesson2/chapter7/L2C7U1/L2C7U1Pb";
import { L2C7U2Pb } from "../../Chapter/lesson2/chapter7/L2C7U2/L2C7U2Pb";
import { L3C1U2Pb } from "../../Chapter/lesson3/chapter1/L3C1U2/L3C1U2Pb";
import { L3C2U2Pb } from "../../Chapter/lesson3/chapter2/L3C2U2/L3C2U2Pb";
import { L4C2U1Pb } from "../../Chapter/lesson4/chapter2/L4C2U1/L4C2U1Pb";

export const PbContents = () => {
  const { lessonID, chID, uID, pID } = useParams();
  const Content = () => {
    // lesson 1
    if (lessonID === "1" && chID === "4" && uID === "1" && pID === "1") {
      return <L1C4U1Pb />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && pID === "1") {
      return <L1C4U2Pb />;
    } else if (lessonID === "1" && chID === "4" && uID === "3" && pID === "1") {
      return <L1C4U3Pb />;
    } else if (lessonID === "1" && chID === "5" && uID === "1" && pID === "1") {
      return <L1C5U1Pb />;
    } else if (lessonID === "1" && chID === "5" && uID === "1" && pID === "2") {
      return <L1C5U1Pb />;
    } else if (lessonID === "1" && chID === "5" && uID === "1" && pID === "2") {
      return <L1C5U1Pb />;
      // lesson 2
    } else if (lessonID === "2" && chID === "6" && uID === "1" && pID === "1") {
      return <L2C6U1Pb />;
    } else if (lessonID === "2" && chID === "6" && uID === "2" && pID === "1") {
      return <L2C6U2Pb />;
    } else if (lessonID === "2" && chID === "6" && uID === "3" && pID === "1") {
      return <L2C6U3Pb />;
    } else if (lessonID === "2" && chID === "6" && uID === "4" && pID === "1") {
      return <L2C6U4Pb />;
    } else if (lessonID === "2" && chID === "6" && uID === "5" && pID === "1") {
      return <L2C6U5Pb />;
    } else if (lessonID === "2" && chID === "7" && uID === "1" && pID === "1") {
      return <L2C7U1Pb />;
    } else if (lessonID === "2" && chID === "7" && uID === "2" && pID === "1") {
      return <L2C7U2Pb />;
    }
    // lesson 3
    else if (lessonID === "3" && chID === "1" && uID === "2" && pID === "1") {
      return <L3C1U2Pb />;
    } else if (lessonID === "3" && chID === "2" && uID === "2" && pID === "1") {
      return <L3C2U2Pb />;
    }
    // lesson 4
    else if (lessonID === "4" && chID === "2" && uID === "1" && pID === "1") {
      return <L4C2U1Pb />;
    }
  };

  return (
    <>
      {uID === "1" ? (
        <UnitName />
      ) : uID === "2" ? (
        <UnitName color={"rgba(76, 133, 87, 1)"} />
      ) : uID === "3" ? (
        <UnitName color={"rgba(78, 151, 183, 1)"} />
      ) : uID === "4" ? (
        <UnitName />
      ) : uID === "5" ? (
        <UnitName color={"rgba(76, 133, 87, 1)"} />
      ) : null}
      <CodeEditor>{Content()}</CodeEditor>
    </>
  );
};

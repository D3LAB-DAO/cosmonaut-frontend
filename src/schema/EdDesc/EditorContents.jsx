import React from "react";
import { useParams } from "react-router-dom";
import L1C1U1 from "../../containers/Chapter/lesson1/chapter1/L1C1U1/L1C1U1";
import L1C1U2 from "../../containers/Chapter/lesson1/chapter1/L1C1U2/L1C1U2";
import L1C1U3 from "../../containers/Chapter/lesson1/chapter1/L1C1U3/L1C1U3";
import L1C2U1 from "../../containers/Chapter/lesson1/chapter2/L1C2U1/L1C2U1";
import L1C3U1 from "../../containers/Chapter/lesson1/chapter3/L1C3U1/L1C3U1";
import L1C4U1 from "../../containers/Chapter/lesson1/chapter4/L1C4U1/L1C4U1";
import L1C4U2 from "../../containers/Chapter/lesson1/chapter4/L1C4U2/L1C4U2";
import L1C4U3 from "../../containers/Chapter/lesson1/chapter4/L1C4U3/L1C4U3";
import L1C5U1 from "../../containers/Chapter/lesson1/chapter5/L1C5U1/L1C5U1";
import L1C5U2 from "../../containers/Chapter/lesson1/chapter5/L1C5U2/L1C5U2";
import { L1C6Pr } from "../../containers/Chapter/lesson1/chapter6/L1C6Pr";
import L2C1U1 from "../../containers/Chapter/lesson2/chapter1/L2C1U1/L2C1U1";
import L2C1U2 from "../../containers/Chapter/lesson2/chapter1/L2C1U2/L2C1U2";
import L2C1U3 from "../../containers/Chapter/lesson2/chapter1/L2C1U3/L2C1U3";
import L2C2U1 from "../../containers/Chapter/lesson2/chapter2/L2C2U1/L2C2U1";
import L2C2U2 from "../../containers/Chapter/lesson2/chapter2/L2C2U2/L2C2U2";
import L2C3U1 from "../../containers/Chapter/lesson2/chapter3/L2C3U1/L2C3U1";
import L2C3U2 from "../../containers/Chapter/lesson2/chapter3/L2C3U2/L2C3U2";
import L2C4U1 from "../../containers/Chapter/lesson2/chapter4/L2C4U1/L2C4U1";
import L2C5U1 from "../../containers/Chapter/lesson2/chapter5/L2C5U1/L2C5U1";
import L2C5U2 from "../../containers/Chapter/lesson2/chapter5/L2C5U2/L2C5U2";
import L2C6U1 from "../../containers/Chapter/lesson2/chapter6/L2C6U1/L2C6U1";
import L2C6U2 from "../../containers/Chapter/lesson2/chapter6/L2C6U2/L2C6U2";
import L2C6U3 from "../../containers/Chapter/lesson2/chapter6/L2C6U3/L2C6U3";
import L2C6U4 from "../../containers/Chapter/lesson2/chapter6/L2C6U4/L2C6U4";
import L2C6U5 from "../../containers/Chapter/lesson2/chapter6/L2C6U5/L2C6U5";
import L2C7U1 from "../../containers/Chapter/lesson2/chapter7/L2C7U1/L2C7U1";
import L2C7U2 from "../../containers/Chapter/lesson2/chapter7/L2C7U2/L2C7U2";
import { L2C8Pr } from "../../containers/Chapter/lesson2/chapter8/L2C8Pr";
import L3C1U1 from "../../containers/Chapter/lesson3/chapter1/L3C1U1/L3C1U1";
import L3C1U2 from "../../containers/Chapter/lesson3/chapter1/L3C1U2/L3C1U2";
import L3C1U3 from "../../containers/Chapter/lesson3/chapter1/L3C1U3/L3C1U3";
import L3C2U1 from "../../containers/Chapter/lesson3/chapter2/L3C2U1/L3C2U1";
import L3C2U2 from "../../containers/Chapter/lesson3/chapter2/L3C2U2/L3C2U2";
import { L3C3Pr } from "../../containers/Chapter/lesson3/chapter3/L3C3Pr";
import L4C1U1 from "../../containers/Chapter/lesson4/chapter1/L4C1U1/L4C1U1";
import L4C1U2 from "../../containers/Chapter/lesson4/chapter1/L4C1U2/L4C1U2";
import L4C2U1 from "../../containers/Chapter/lesson4/chapter2/L4C2U1/L4C2U1";
import { L4C3Pr } from "../../containers/Chapter/lesson4/chapter3/L4C3Pr";

function EditorContents() {
  const { lessonID, chID, uID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "1" && uID === "1") {
      return <L1C1U1 />;
    } else if (lessonID === "1" && chID === "1" && uID === "2") {
      return <L1C1U2 />;
    } else if (lessonID === "1" && chID === "1" && uID === "3") {
      return <L1C1U3 />;
    } else if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2U1 />;
    } else if (lessonID === "1" && chID === "3" && uID === "1") {
      return <L1C3U1 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1") {
      return <L1C4U1 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2") {
      return <L1C4U2 />;
    } else if (lessonID === "1" && chID === "4" && uID === "3") {
      return <L1C4U3 />;
    } else if (lessonID === "1" && chID === "5" && uID === "1") {
      return <L1C5U1 />;
    } else if (lessonID === "1" && chID === "5" && uID === "2") {
      return <L1C5U2 />;
    } else if (lessonID === "1" && chID === "6" && uID === "1") {
      return <L1C6Pr />;
    } else if (lessonID === "1" && chID === "6" && uID === "2") {
      return <L1C6Pr />;

      // lesson 2
    } else if (lessonID === "2" && chID === "1" && uID === "1") {
      return <L2C1U1 />;
    } else if (lessonID === "2" && chID === "1" && uID === "2") {
      return <L2C1U2 />;
    } else if (lessonID === "2" && chID === "1" && uID === "3") {
      return <L2C1U3 />;
    } else if (lessonID === "2" && chID === "2" && uID === "1") {
      return <L2C2U1 />;
    } else if (lessonID === "2" && chID === "2" && uID === "2") {
      return <L2C2U2 />;
    } else if (lessonID === "2" && chID === "3" && uID === "1") {
      return <L2C3U1 />;
    } else if (lessonID === "2" && chID === "3" && uID === "2") {
      return <L2C3U2 />;
    } else if (lessonID === "2" && chID === "4" && uID === "1") {
      return <L2C4U1 />;
    } else if (lessonID === "2" && chID === "5" && uID === "1") {
      return <L2C5U1 />;
    } else if (lessonID === "2" && chID === "5" && uID === "2") {
      return <L2C5U2 />;
    } else if (lessonID === "2" && chID === "6" && uID === "1") {
      return <L2C6U1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "2") {
      return <L2C6U2 />;
    } else if (lessonID === "2" && chID === "6" && uID === "3") {
      return <L2C6U3 />;
    } else if (lessonID === "2" && chID === "6" && uID === "4") {
      return <L2C6U4 />;
    } else if (lessonID === "2" && chID === "6" && uID === "5") {
      return <L2C6U5 />;
    } else if (lessonID === "2" && chID === "7" && uID === "1") {
      return <L2C7U1 />;
    } else if (lessonID === "2" && chID === "7" && uID === "2") {
      return <L2C7U2 />;
    } else if (lessonID === "2" && chID === "8" && uID === "1") {
      return <L2C8Pr />;
    } else if (lessonID === "2" && chID === "8" && uID === "2") {
      return <L2C8Pr />;

      // lesson 3
    } else if (lessonID === "3" && chID === "1" && uID === "1") {
      return <L3C1U1 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2") {
      return <L3C1U2 />;
    } else if (lessonID === "3" && chID === "1" && uID === "3") {
      return <L3C1U3 />;
    } else if (lessonID === "3" && chID === "2" && uID === "1") {
      return <L3C2U1 />;
    } else if (lessonID === "3" && chID === "2" && uID === "2") {
      return <L3C2U2 />;
    } else if (lessonID === "3" && chID === "3" && uID === "1") {
      return <L3C3Pr />;

      // lesson 4
    } else if (lessonID === "4" && chID === "1" && uID === "1") {
      return <L4C1U1 />;
    } else if (lessonID === "4" && chID === "1" && uID === "2") {
      return <L4C1U2 />;
    } else if (lessonID === "4" && chID === "2" && uID === "1") {
      return <L4C2U1 />;
    } else if (lessonID === "4" && chID === "3" && uID === "1") {
      return <L4C3Pr />;
    }
  };
  return <>{Content()}</>;
}

export default EditorContents;

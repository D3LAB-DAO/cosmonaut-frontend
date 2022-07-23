import React from "react";
import { useParams } from "react-router-dom";
import { L1C1Step } from "./L1C1Step";
import { L1C2Step } from "./L1C2Step";
import { L1C3Step } from "./L1C3Step";
import { L1C4Step } from "./L1C4Step";
import { L1C5Step } from "./L1C5Step";
import { L2C1Step } from "./L2C1Step";
import { L2C2Step } from "./L2C2Step";
import { L2C3Step } from "./L2C3Step";
import { L2C4Step } from "./L2C4Step";
import { L2C5Step } from "./L2C5Step";
import { L2C6Step } from "./L2C6Step";
import { L2C7Step } from "./L2C7Step";
import { L3C1Step } from "./L3C1Step";
import { L3C2Step } from "./L3C2Step";
import { L4C1Step } from "./L4C1Step";
import { L4C2Step } from "./L4C2Step";

const Stepper = () => {
  const { lessonID, chID } = useParams();

  return (
    <>
      {lessonID === "1" && chID === "1" ? (
        <L1C1Step />
      ) : lessonID === "1" && chID === "2" ? (
        <L1C2Step />
      ) : lessonID === "1" && chID === "3" ? (
        <L1C3Step />
      ) : lessonID === "1" && chID === "4" ? (
        <L1C4Step />
      ) : lessonID === "1" && chID === "5" ? (
        <L1C5Step />
      ) : lessonID === "2" && chID === "1" ? (
        <L2C1Step />
      ) : lessonID === "2" && chID === "2" ? (
        <L2C2Step />
      ) : lessonID === "2" && chID === "3" ? (
        <L2C3Step />
      ) : lessonID === "2" && chID === "4" ? (
        <L2C4Step />
      ) : lessonID === "2" && chID === "5" ? (
        <L2C5Step />
      ) : lessonID === "2" && chID === "6" ? (
        <L2C6Step />
      ) : lessonID === "2" && chID === "7" ? (
        <L2C7Step />
      ) : lessonID === "3" && chID === "1" ? (
        <L3C1Step />
      ) : lessonID === "3" && chID === "2" ? (
        <L3C2Step />
      ) : lessonID === "4" && chID === "1" ? (
        <L4C1Step />
      ) : lessonID === "4" && chID === "2" ? (
        <L4C2Step />
      ) : null}
    </>
  );
};

export default Stepper;

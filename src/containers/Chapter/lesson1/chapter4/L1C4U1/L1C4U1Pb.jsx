import React, { useState } from "react";
import L1C4U1S1Code from "./Problem/L1C4U1S1Code";
import L1C4U1S2Code from "./Problem/L1C4U1S2Code";
import L1C4U1S3Code from "./Problem/L1C4U1S3Code";
import QuizTab from "../../../../../components/CodeEditor/QuizTab";
import QuizBody from "../../../../../components/CodeEditor/QuizBody";
import QuizBtn from "../../../../../components/CodeEditor/QuizBtn";
import L1C4U1S4Code from "./Problem/L1C4U1S4Code";
import L1C4U1S5Code from "./Problem/L1C4U1S5Code";
import L1C4U1S6Code from "./Problem/L1C4U1S6Code";
import L1C4U1S7Code from "./Problem/L1C4U1S7Code";
import L1C4U1S8Code from "./Problem/L1C4U1S8Code";

export const L1C4U1Pb = () => {
  const [openTab, setOpenTab] = useState(1);
  console.log(openTab);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          {/* Quiz Header */}
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
              >
                Q1
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
              >
                Q2
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
              >
                Q3
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
              >
                Q4
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
              >
                Q5
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
              >
                Q6
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
              >
                Q7
              </QuizBtn>
            </QuizTab>
            <QuizTab>
              <QuizBtn
                onclick={e => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
              >
                Q8
              </QuizBtn>
            </QuizTab>
          </ul>
          {/* Quiz Body */}
          <QuizBody>
            <div className={openTab === 1 ? "block" : "hidden"} id="q1">
              <L1C4U1S1Code />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="q2">
              <L1C4U1S2Code />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="q3">
              <L1C4U1S3Code />
            </div>
            <div className={openTab === 4 ? "block" : "hidden"} id="q4">
              <L1C4U1S4Code />
            </div>
            <div className={openTab === 5 ? "block" : "hidden"} id="q5">
              <L1C4U1S5Code />
            </div>
            <div className={openTab === 6 ? "block" : "hidden"} id="q6">
              <L1C4U1S6Code />
            </div>
            <div className={openTab === 7 ? "block" : "hidden"} id="q7">
              <L1C4U1S7Code />
            </div>
            <div className={openTab === 8 ? "block" : "hidden"} id="q8">
              <L1C4U1S8Code />
            </div>
          </QuizBody>
        </div>
      </div>
    </>
  );
};

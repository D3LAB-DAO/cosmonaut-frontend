import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { codeEx } from "./L1C4U1Ex";
import L1C4U1S1Code from "./Problem/L1C4U1S1Code";
import L1C4U1S2Code from "./Problem/L1C4U1S2Code";
import L1C4U1S3Code from "./Problem/L1C4U1S3Code";
import L1C4U1S4Code from "./Problem/L1C4U1S4Code";
import L1C4U1S5Code from "./Problem/L1C4U1S5Code";
import L1C4U1S6Code from "./Problem/L1C4U1S6Code";
import L1C4U1S7Code from "./Problem/L1C4U1S7Code";
import L1C4U1S8Code from "./Problem/L1C4U1S8Code";
import { codeAns } from "./L1C4U1Ans";
import { useDiffApi } from "../../../../../libs/api/postDiff";

export const L1C4U1Pb = () => {
  const { lessonID, chID, uID, pID } = useParams();
  const [openTab, setOpenTab] = useState(1);
  const [difSuccess, setDifSuccess] = useState(false);
  const [ex, setEx] = useState(codeEx.Q1);
  const [ans, setAns] = useState(codeAns.Q1);

  const [response, isLoading, isSuccess, diffFetch] = useDiffApi(false);
  const handleAns = async () => {
    setDifSuccess(true);
    await diffFetch();
  };

  const navigate = useNavigate();
  const nextCh = async () => {
    if (lessonID === "1" && chID === "4" && uID === "1" && pID === "1") {
      return navigate(`/lesson/1/chapter/4/unit/2`);
    }
  };

  return (
    <>
      <div class="flex container w-full mx-auto">
        {/* Side Tabs */}
        <div class="w-14 ">
          <button
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
              setEx(codeEx.Q1);
              setAns(codeAns.Q1);
            }}
            class="w-full rounded-tl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            1
          </button>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
              setEx(codeEx.Q2);
              setAns(codeAns.Q2);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-blue-500 transform">2</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
              setEx(codeEx.Q3);
              setAns(codeAns.Q3);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">3</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(4);
              setEx(codeEx.Q4);
              setAns(codeAns.Q4);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">4</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(5);
              setEx(codeEx.Q5);
              setAns(codeAns.Q5);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">5</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(6);
              setEx(codeEx.Q6);
              setAns(codeAns.Q6);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">6</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(7);
              setEx(codeEx.Q7);
              setAns(codeAns.Q7);
            }}
            class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">7</button>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              setOpenTab(8);
              setEx(codeEx.Q8);
              setAns(codeAns.Q8);
            }}
            class="rounded-bl-xl text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            <button class="focus:text-gray-900 transform">8</button>
          </div>
        </div>
        {/* Code Editor */}
        <button
          className={
            openTab === 1
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S1Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 2
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S2Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 3
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S3Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 4
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S4Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 5
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S5Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 6
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S6Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 7
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S7Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
        <button
          className={
            openTab === 8
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U1S8Code difSuccess={difSuccess} ex={ex} ans={ans} />
        </button>
      </div>

      {difSuccess ? (
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            onClick={nextCh}
            class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
          >
            Jump to Next Chapter
          </button>
        </div>
      ) : (
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            onClick={handleAns}
            class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
          >
            Check your Answer
          </button>
        </div>
      )}
    </>
  );
};

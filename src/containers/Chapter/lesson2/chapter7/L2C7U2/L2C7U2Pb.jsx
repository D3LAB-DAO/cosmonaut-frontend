import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import { codeAns } from "./L2C7U2Ans";
import { codeEx } from "./L2C7U2Ex";
import L2C7U2S2Code from "./Problem/L2C7U2Code";

export const L2C7U2Pb = () => {
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
    if (lessonID === "2" && chID === "7" && uID === "2" && pID === "1") {
      return navigate(`/lesson/2/chapter/8/unit/1`);
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
            class="w-full rounded-l-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            1
          </button>
        </div>
        {/* Code Editor */}
        <button
          className={
            openTab === 1
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L2C7U2S2Code difSuccess={difSuccess} ex={ex} ans={ans} />
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

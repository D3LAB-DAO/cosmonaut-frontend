import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProgress } from "../../../../../libs/api/getUserProgress";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import { codeAns } from "../../chapter1/L3C1U2/L3C1U2Ans";
import { codeEx } from "./L3C2U2Ex";
import L3C2U2S1Code from "./Problem/L3C2U2S1Code";
import L3C2U2S2Code from "./Problem/L3C2U2S2Code";
import L3C2U2S3Code from "./Problem/L3C2U2S3Code";
import L3C2U2S4Code from "./Problem/L3C2U2S4Code";

export const L3C2U2Pb = () => {
  const { lessonID, chID, uID, pID } = useParams();
  const [openTab, setOpenTab] = useState(1);
  const [difSuccess, setDifSuccess] = useState(false);
  const [ex, setEx] = useState(codeEx.Q1);
  const [ans, setAns] = useState(codeAns.Q1);
  const [readOnly, setReadOnly] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userLoading, userRes, userFetch] = useGetUserProgress(lessonID);

  useEffect(() => {
    userFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [response, isLoading, isSuccess, diffFetch] = useDiffApi(true);
  const handleAns = async () => {
    setDifSuccess(true);
    setReadOnly(true);
    if (chID >= String(userRes) && !(userRes === 0)) {
      await diffFetch();
    }
  };

  const navigate = useNavigate();
  const nextCh = async () => {
    if (lessonID === "3" && chID === "2" && uID === "2" && pID === "1") {
      return navigate(`/lesson/3/chapter/3/unit/1`);
    }
  };

  let codeDiff;
  switch (openTab) {
    case 1:
      codeDiff = (
        <L3C2U2S1Code
          read={readOnly}
          difSuccess={difSuccess}
          ex={ex}
          ans={ans}
        />
      );
      break;
    case 2:
      codeDiff = (
        <L3C2U2S2Code
          read={readOnly}
          difSuccess={difSuccess}
          ex={ex}
          ans={ans}
        />
      );
      break;
    case 3:
      codeDiff = (
        <L3C2U2S3Code
          read={readOnly}
          difSuccess={difSuccess}
          ex={ex}
          ans={ans}
        />
      );
      break;
    case 4:
      codeDiff = (
        <L3C2U2S4Code
          read={readOnly}
          difSuccess={difSuccess}
          ex={ex}
          ans={ans}
        />
      );
      break;
    default:
      break;
  }

  return (
    <>
      <div class="flex container w-full mx-auto">
        {/* Side Tabs */}
        <div class="w-14 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
              setEx(codeEx.Q1);
              setAns(codeAns.Q1);
            }}
            class="w-full rounded-tl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            1
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
              setEx(codeEx.Q2);
              setAns(codeAns.Q2);
            }}
            class="w-full text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            2
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
              setEx(codeEx.Q3);
              setAns(codeAns.Q3);
            }}
            class="w-full text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            3
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
              setEx(codeEx.Q4);
              setAns(codeAns.Q4);
            }}
            class="w-full rounded-bl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            4
          </button>
        </div>
        {/* Code Editor */}
        <div className="flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full">
          {codeDiff}
        </div>
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

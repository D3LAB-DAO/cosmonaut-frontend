import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import { codeEx } from "./L1C4U2Ex";
import L1C4U2S10Code from "./Problem/L1C4U2S10Code";
import L1C4U2S11Code from "./Problem/L1C4U2S11Code";
import L1C4U2S1Code from "./Problem/L1C4U2S1Code";
import L1C4U2S2Code from "./Problem/L1C4U2S2Code";
import L1C4U2S3Code from "./Problem/L1C4U2S3Code";
import L1C4U2S4Code from "./Problem/L1C4U2S4Code";
import L1C4U2S5Code from "./Problem/L1C4U2S5Code";
import L1C4U2S6Code from "./Problem/L1C4U2S6Code";
import L1C4U2S7Code from "./Problem/L1C4U2S7Code";
import L1C4U2S8Code from "./Problem/L1C4U2S8Code";
import L1C4U2S9Code from "./Problem/L1C4U2S9Code";

export const L1C4U2Pb = () => {
  const [openTab, setOpenTab] = useState(1);
  const [ex, setEx] = useState(codeEx.Q1);

  const [difRes, difLoading, difSuccess, difError, difFetch] =
    useDiffApi(false);
  const handleAns = async () => {
    await difFetch();
  };
  const { lessonID, chID, uID, pID } = useParams();
  const navigate = useNavigate();
  const nextCh = async () => {
    if (lessonID === "1" && chID === "4" && uID === "2" && pID === "1") {
      return navigate(`/lesson/1/chapter/4/unit/3`);
    }
  };

  return (
    <>
      <div class="flex container w-full mx-auto">
        {/* Side Tabs */}
        <div class="w-14 ">
          <div class="rounded-tl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
                setEx(codeEx.Q1);
              }}
              class="focus:text-gray-900 transform"
            >
              1
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
                setEx(codeEx.Q2);
              }}
              class="focus:text-gray-900 transform"
            >
              2
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(3);
                setEx(codeEx.Q3);
              }}
              class="focus:text-gray-900 transform"
            >
              3
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(4);
                setEx(codeEx.Q4);
              }}
              class="focus:text-gray-900 transform"
            >
              4
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(5);
                setEx(codeEx.Q5);
              }}
              class="focus:text-gray-900 transform"
            >
              5
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(6);
                setEx(codeEx.Q6);
              }}
              class="focus:text-gray-900 transform"
            >
              6
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(7);
                setEx(codeEx.Q7);
              }}
              class="focus:text-gray-900 transform"
            >
              7
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(8);
                setEx(codeEx.Q8);
              }}
              class="focus:text-gray-900 transform"
            >
              8
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(9);
                setEx(codeEx.Q9);
              }}
              class="focus:text-gray-900 transform"
            >
              9
            </button>
          </div>
          <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(10);
                setEx(codeEx.Q10);
              }}
              class="focus:text-gray-900 transform"
            >
              10
            </button>
          </div>
          <div class="rounded-bl-xl text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(11);
                setEx(codeEx.Q11);
              }}
              class="focus:text-gray-900 transform"
            >
              11
            </button>
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
          <L1C4U2S1Code
            difRes={difRes.Q1}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 2
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S2Code
            difRes={difRes.Q2}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 3
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S3Code
            difRes={difRes.Q3}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 4
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S4Code
            difRes={difRes.Q4}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 5
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S5Code
            difRes={difRes.Q5}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 6
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S6Code
            difRes={difRes.Q6}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 7
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S7Code
            difRes={difRes.Q7}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 8
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S8Code
            difRes={difRes.Q8}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 9
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S9Code
            difRes={difRes.Q9}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 10
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S10Code
            difRes={difRes.Q10}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
        </button>
        <button
          className={
            openTab === 11
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L1C4U2S11Code
            difRes={difRes.Q11}
            difLoading={difLoading}
            difSuccess={difSuccess}
            ex={ex}
          />
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

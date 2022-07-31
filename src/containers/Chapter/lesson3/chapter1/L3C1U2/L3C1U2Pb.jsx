import React, { useState } from "react";
import { JumpNextCh } from "../../../../../components/CodeEditor/JumpNextCh";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import L3C1U2S1Code from "./Problem/L3C1U2S1Code";
import L3C1U2S2Code from "./Problem/L3C1U2S2Code";
import L3C1U2S3Code from "./Problem/L3C1U2S3Code";
import L3C1U2S4Code from "./Problem/L3C1U2S4Code";
import L3C1U2S5Code from "./Problem/L3C1U2S5Code";
import L3C1U2S6Code from "./Problem/L3C1U2S6Code";
import L3C1U2S7Code from "./Problem/L3C1U2S7Code";
import L3C1U2S8Code from "./Problem/L3C1U2S8Code";
import L3C1U2S9Code from "./Problem/L3C1U2S9Code";

export const L3C1U2Pb = () => {
  const [openTab, setOpenTab] = useState(1);
  console.log(openTab);
  const [{ difRes, difLoading, difSuccess, difError }, difFetch] = useDiffApi();
  const handleAns = async () => {
    console.log("Good handleAns");
    await difFetch();
  };
  console.log(difRes);

  return (
    <>
      <div class="flex container w-full mx-auto">
        {/* Side Tabs */}
        <div class="w-14 ">
          <div class="rounded-tl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                console.log("click 1!");
                setOpenTab(1);
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
              }}
              class="focus:text-gray-900 transform"
            >
              7
            </button>
          </div>
          <div
            onClick={e => {
              e.preventDefault();
              setOpenTab(8);
            }}
            class="text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            8
          </div>
          <div
            onClick={e => {
              e.preventDefault();
              setOpenTab(9);
            }}
            class="rounded-bl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            9
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
          <L3C1U2S1Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 2
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S2Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 3
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S3Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 4
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S4Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 5
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S5Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 6
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S6Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 7
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S7Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 8
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S8Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
        <button
          className={
            openTab === 9
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
        >
          <L3C1U2S9Code
            difRes={difRes}
            difLoading={difLoading}
            difSuccess={difSuccess}
          />
        </button>
      </div>
      {difSuccess ? (
        <JumpNextCh>Jump to Next Chapter</JumpNextCh>
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

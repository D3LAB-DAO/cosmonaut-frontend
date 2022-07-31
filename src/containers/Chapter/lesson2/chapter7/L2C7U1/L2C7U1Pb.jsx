import React, { useState } from "react";
import { JumpNextCh } from "../../../../../components/CodeEditor/JumpNextCh";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import L2C7U1S1Code from "./Problem/L2C7U1Code";

export const L2C7U1Pb = () => {
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
          <div class="rounded-l-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
            <button
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              class="focus:text-gray-900 transform"
            >
              1
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
          <L2C7U1S1Code
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

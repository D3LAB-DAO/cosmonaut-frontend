import React, { useState } from "react";
import {
  CheckAnsAbl,
  CheckAnsDis,
} from "../../../../../components/CodeEditor/CheckAns";
import { JumpNextCh } from "../../../../../components/CodeEditor/JumpNextCh";
import SideTab from "../../../../../components/CodeEditor/SideTab";
import { useDiffApi } from "../../../../../libs/api/postDiff";
import L1C4U1S1Code from "./Problem/L1C4U1S1Code";
import L1C4U1S2Code from "./Problem/L1C4U1S2Code";

export const L1C4U1Pb = () => {
  const [openTab, setOpenTab] = useState(1);
  const [{ difRes, difLoading, difSuccess, difError }, difFetch] = useDiffApi();
  console.log(difRes);
  console.log(difSuccess);
  console.log(difError);

  return (
    <>
      <div class="flex container w-full mx-auto">
        {/* Side Tabs */}
        <div class="w-14 ">
          <div
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            class="rounded-tl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            1
          </div>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            2
          </SideTab>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            3
          </SideTab>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(4);
            }}
          >
            4
          </SideTab>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(5);
            }}
          >
            5
          </SideTab>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(6);
            }}
          >
            6
          </SideTab>
          <SideTab
            onClick={e => {
              e.preventDefault();
              setOpenTab(7);
            }}
          >
            7
          </SideTab>
          <div
            onClick={e => {
              e.preventDefault();
              setOpenTab(8);
            }}
            class="rounded-bl-xl text-gray-300 bg-gray-100 focus:bg-blue-500 focus:text-gray-900  transform h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading"
          >
            8
          </div>
        </div>
        {/* Code Editor */}
        <div
          className={
            openTab === 1
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
          id="q1"
        >
          <L1C4U1S1Code difRes={difRes} difLoading={difLoading} />
        </div>
        <div
          className={
            openTab === 2
              ? "flex flex-wrap bg-indigo-900 rounded-r-2xl rounded-bl-2xl w-full"
              : "hidden"
          }
          id="q2"
        >
          <L1C4U1S2Code />
        </div>
      </div>
      <CheckAnsDis>Check your Answer</CheckAnsDis>
      <CheckAnsAbl onClick={difFetch}>Check your Answer</CheckAnsAbl>
      <JumpNextCh>Jump to Next Chapter</JumpNextCh>
    </>
  );
};

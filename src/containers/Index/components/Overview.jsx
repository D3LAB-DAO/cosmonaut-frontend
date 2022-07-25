import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import AngleRight from "../../../components/Common/Icon/AngleRight";
import ProgressBar, {
  ProgressBar0,
  ProgressBar1,
  ProgressBar2,
  ProgressBar3,
  ProgressBar4,
} from "../../../components/Common/ProgressBar";
import Goal from "../../../assets/images/goal.svg";
import Result from "../../../assets/images/result.svg";
import { useRecoilValue } from "recoil";
import {
  lessonGoal,
  lessonResult,
} from "../../../states/Information/lessonInfoAtoms";
import { useParams } from "react-router-dom";
import { useGetLessonPic } from "../../../libs/api/getLessonPic";
import { useGetUserProgress } from "../../../libs/api/getUserProgress";
import { indexInfo } from "../../../states/Information/indexInfo";
import error from "../../../assets/images/dummy-nft.jpg";

const Container = tw.div`w-full lg:col-span-1 col-span-2 lg:mx-0 mx-auto lg:order-1 order-2`;
const Title = tw.h1`text-xs md:text-lg font-semibold text-center text-yellow-500 mb-1`;
const SubTitle = tw.div`mt-3 mb-4`;
const Desc = tw.div`grid grid-cols-3 items-center block grid place-content-center px-4 md:my-6 my-4 md:mx-4 py-4 text-center bg-indigo-900 rounded-xl mx-4`;
const SubDesc = tw.div`flex items-start md:my-6 md:mx-8 mx-4 text-gray-500 my-4`;
const Wrapper = tw.div`bg-yellow-100 md:grid md:grid-cols-3 xl:gap-4 gap-2 md:mt-3 mt-2 md:items-start items-center xl:px-6 rounded-xl px-3 py-3 py-4 mx-4`;

function Overview(progress) {
  const { lessonID } = useParams();
  const engInfo = useRecoilValue(indexInfo);
  const goal = useRecoilValue(lessonGoal);
  const result = useRecoilValue(lessonResult);

  const [picRes, picFetch] = useGetLessonPic({ lessonID });
  const [userRes, userFetch] = useGetUserProgress({ lessonID });

  useEffect(() => {
    picFetch();
    userFetch();
  }, [lessonID]);

  console.log(picRes);
  console.log(userRes);
  console.log(userRes.chapter);

  const onErrorImg = e => {
    e.target.src = error;
  };

  return (
    <Container>
      <div class="animate-fadeInLtoR lg:border-b-0 lg:border-t-0 bg-green-500 rounded-3xl mx-6 lg:mx-0 md:px-2 px-1 md:py-2 py-1">
        <div class="block object-cover mx-auto">
          <div class="px-4 bg-gray-50 rounded-2xl lg:pt-4 pt-6 border-indigo-900 border-4 md:pb-10 pb-6">
            <Title>Lesson Overview</Title>

            <SubTitle>
              <h2 class="text-center text-lg font-heading text-indigo-900">
                {engInfo[lessonID]?.num}.
              </h2>
              <h3 class="text-2xl text-center font-heading text-indigo-900">
                {engInfo[lessonID]?.title}
              </h3>
            </SubTitle>
            {lessonID === "0" ? (
              <ProgressBar0 progress={progress} />
            ) : lessonID === "1" ? (
              <ProgressBar1 progress={progress} />
            ) : lessonID === "2" ? (
              <ProgressBar2 progress={progress} />
            ) : lessonID === "3" ? (
              <ProgressBar3 progress={progress} />
            ) : lessonID === "4" ? (
              <ProgressBar4 progress={progress} />
            ) : null}
            <Desc>
              <div class="col-span-1">
                <img
                  class="block h-40 object-cover rounded-md"
                  alt="cosmonaut-nft"
                  src={picRes}
                  onError={onErrorImg}
                />
              </div>
              <div class="flex ml-4 h-full col-span-2 border-t-2 border-b-2 border-dashed border-white items-center justify-center">
                <h2 class="md:text-lg text-sm font-mono text-gray-50">
                  {engInfo[lessonID]?.desc}
                </h2>
              </div>
            </Desc>

            <SubDesc>
              <AngleRight />
              <span class="md:text-lg text-left font-normal text-xs">
                {engInfo[lessonID]?.subDesc}
              </span>
            </SubDesc>

            <Wrapper>
              <div class="md:col-span-1 flex md:justify-start">
                <div class="flex-shrink-0 flex items-center justify-center w-9 h-9">
                  <img class="block" src={Goal} alt="" />
                </div>
                <h4 class="xl:text-lg text-base font-heading text-indigo-900 self-center lg:ml-4 ml-2">
                  goal
                </h4>
              </div>

              <ul class="col-span-2 list-disc xl:text-base md:text-sm text-xs font-normal text-indigo-900 md:ml-3 ml-5 md:mt-0 mt-3">
                {goal[lessonID]?.map(e => (
                  <li key={e?.id}>{e?.goal}</li>
                ))}
              </ul>
            </Wrapper>

            <Wrapper>
              <div class="md:col-span-1 flex md:justify-start">
                <div class="flex-shrink-0 flex items-center justify-center w-9 h-9 ml">
                  <img class="block" src={Result} alt="" />
                </div>
                <h4 class="xl:text-lg text-base font-heading text-indigo-900 self-center lg:ml-4 ml-2">
                  result
                </h4>
              </div>
              <ul class="col-span-2 list-disc xl:text-base md:text-sm text-xs font-normal text-indigo-900 md:ml-3 ml-5 md:mt-0 mt-3">
                {result[lessonID]?.map(e => (
                  <li key={e?.id}>{e?.result}</li>
                ))}
              </ul>
            </Wrapper>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Overview;

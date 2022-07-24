import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import { indexInfo } from "../../../states/Information/indexInfo";
import { lessonEngInfo } from "../../../states/Information/lessonInfoAtoms";

const Container = tw.div`w-full mb-14 lg:mb-0 lg:col-span-1 col-span-2 lg:order-2 order-1`;
const Title = tw.h2`text-2xl md:text-4xl text-center lg:text-left mt-2 text-orange-400 lg:mb-8 mb-6 font-heading`;
const LessonList = tw.div`md:space-y-5 space-y-3 md:mx-0 mx-6`;
const ButtonWrap = tw.div`flex flex-wrap mt-10 lg:justify-end justify-center`;

function Curriculum() {
  const { lessonID } = useParams();
  const startLesson = `/lesson/${lessonID}/chapter/1/unit/0`;
  const engInfo = useRecoilValue(indexInfo);

  return (
    <Container>
      <div class="max-w-lg px-4 mx-auto">
        <Title>Curriculum</Title>
        <LessonList>
          {engInfo?.map(e => {
            const lessonUrl = `/lesson/${e?.id}`;
            return (
              <Link key={e?.id} to={lessonUrl}>
                <button class="animate-fadeInRtoL mb-5 flex w-full md:px-6 px-3 md:py-3 py-1 bg-white md:shadow shadow-sm border-2 border-indigo-900 items-center justify-between ease-in-out duration-300 transform hover:scale-105 hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-green-500 active:bg-yellow-500 rounded-md">
                  <span class="md:text-lg text-sm font-heading text-indigo-900">
                    {e?.num}.
                  </span>
                  <span class="md:text-base text-xs font-heading text-indigo-900">
                    {e?.title}
                  </span>
                </button>
              </Link>
            );
          })}
        </LessonList>
        <Link to={startLesson}>
          <ButtonWrap>
            <button class="hover:from-green-500 hover:to-blue-500 hover:text-white inline-block md:w-auto mb-2 md:mb-0 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 shadow rounded-full md:mx-0 mx-8 md:px-10 md:py-4 py-2 px-12">
              START LESSON
            </button>
          </ButtonWrap>
        </Link>
      </div>
    </Container>
  );
}

export default Curriculum;

import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Overview from "./components/Overview";
import { useGetUserProgress } from "../../libs/api/getUserProgress";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { indexInfo } from "../../states/Information/indexInfo";
import { useEffect } from "react";
import Video from "../../assets/indexbg.mp4";

const Curriculum = tw.div`w-full mb-14 lg:mb-0 lg:col-span-1 col-span-2 lg:order-2 order-1`;
const Title = tw.h2`text-2xl md:text-4xl text-center lg:text-left mt-2 text-orange-400 lg:mb-8 mb-6 font-heading`;
const LessonList = tw.div`md:space-y-5 space-y-3 md:mx-0 mx-6`;
const ButtonWrap = tw.div`flex flex-wrap mt-10 lg:justify-end justify-center`;
const NoneBtn = tw.div`pointer-events-none flex flex-wrap mt-10 lg:justify-end justify-center`;

function IndexPage() {
  const { lessonID } = useParams();
  const [userLoading, userRes, userFetch] = useGetUserProgress(lessonID);
  const startLesson = `/lesson/${lessonID}/chapter/1/unit/0`;
  const engInfo = useRecoilValue(indexInfo);

  useEffect(() => {
    userFetch();
  }, [lessonID]);

  return (
    <>
      <Navbar />
      <div className="z-0 h-auto relative lg:pb-20 bg-cover bg-center bg-opacity-10 lg:pt-32">
        <div className="z-[-1] h-auto absolute top-[2.2rem] w-full">
          <video className="w-full" autoPlay muted loop playsInline>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div class="container lg:px-8 mx-auto relative mb-24">
          <div class="grid grid-cols-2 w-full mx-auto lg:gap-12 lg:-mx-4">
            <Overview />
            <Curriculum>
              <div class="max-w-lg px-4 mx-auto">
                <Title>Curriculum</Title>
                {engInfo?.map((e) => {
                  const lessonUrl = `/lesson/${e?.id}`;
                  return (
                    <LessonList>
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
                    </LessonList>
                  );
                })}

                {!(userRes === -1) || lessonID === "0" ? (
                  <>
                    <Link to={startLesson}>
                      <ButtonWrap>
                        <button class="hover:from-green-500 hover:to-blue-500 hover:text-white inline-block md:w-auto mb-2 md:mb-0 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 shadow rounded-full md:mx-0 mx-8 md:px-10 md:py-4 py-2 px-12">
                          START LESSON
                        </button>
                      </ButtonWrap>
                    </Link>
                  </>
                ) : (
                  <>
                    <NoneBtn>
                      <button class="inline-block md:w-auto mb-2 md:mb-0 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 shadow rounded-full md:mx-0 mx-8 md:px-10 md:py-4 py-2 px-12 opacity-40 cursor-not-allowed">
                        START LESSON
                      </button>
                    </NoneBtn>
                  </>
                )}
              </div>
            </Curriculum>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IndexPage;

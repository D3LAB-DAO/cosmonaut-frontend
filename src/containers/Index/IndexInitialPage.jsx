import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { indexInfo } from "../../states/Information/indexInfo";
import Video from "../../assets/indexbg.mp4";

const Container = tw.div`relative lg:pb-20 bg-cover bg-center bg-opacity-10 lg:pt-32`;
const Background = tw.div`bg-indigo-900 justify-center rounded-2xl border-indigo-900 border-4 flex h-index px-12 items-center bg-center bg-no-repeat`;
const Title = tw.h2`text-2xl md:text-4xl text-center lg:text-left mt-2 text-orange-400 lg:mb-8 mb-6 font-heading`;
const LessonList = tw.div`md:space-y-5 space-y-3 md:mx-0 mx-6`;
const ButtonWrap = tw.div`pointer-events-none flex flex-wrap mt-10 lg:justify-end justify-center`;
const Curriculum = tw.div`w-full mb-14 lg:mb-0 lg:col-span-1 col-span-2 lg:order-2 order-1`;

function IndexInitialPage() {
  const { lessonID } = useParams();
  const startLesson = `/${lessonID}/chapter/1/unit/0`;
  const engInfo = useRecoilValue(indexInfo);
  return (
    <>
      <Navbar />
      <Container>
        <div className="z-[-1] h-auto absolute top-[2.2rem] w-full">
          <video className="w-full" autoPlay muted loop playsInline>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div class="container lg:px-8 mx-auto relative mb-24">
          <div class="grid grid-cols-2 w-full mx-auto lg:gap-12 lg:-mx-4">
            <div class="animate-fadeInLtoR lg:border-b-0 lg:border-t-0 bg-green-500 rounded-3xl mx-6 lg:mx-0 md:px-2 px-1 md:py-2 py-1">
              <div class="block object-cover mx-auto">
                <Background
                  style={{
                    backgroundImage: `url(${require("../../assets/images/spacetrip.gif")})`,
                  }}
                >
                  <div class="mx-auto grid grid-cols-1 border-t-2 border-b-2 border-dashed border-white place-content-center h-full py-40">
                    <h3 class="w-full block text-2xl text-center font-heading text-yellow-500">
                      Ready for your Journey?
                    </h3>
                    <div class="w-full grid grid-cols-3 md:my-6 py-4 place-items-center px-12">
                      <div class="col-span-1">
                        <img
                          class="block h-20 object-cover rounded-md"
                          alt=""
                          src={Icon1}
                        />
                      </div>
                      <div class="col-span-1">
                        <img
                          class="block h-20 object-cover rounded-md"
                          alt=""
                          src={Icon2}
                        />
                      </div>
                      <div class="col-span-1">
                        <img
                          class="block h-20 object-cover rounded-md"
                          alt=""
                          src={Icon3}
                        />
                      </div>
                    </div>
                    <h3 class="w-full block text-base text-center text-white font-medium leading-normal px-12">
                      Click any lessons on the right.You’ll see the overview
                      plan for each trip.
                    </h3>
                  </div>
                </Background>
              </div>
            </div>
            <Curriculum>
              <div class="max-w-lg px-4 mx-auto">
                <Title>Curriculum</Title>
                <LessonList>
                  {engInfo?.map((e) => {
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
                <ButtonWrap>
                  <Link to={startLesson}>
                    <button class="inline-block md:w-auto mb-2 md:mb-0 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 shadow rounded-full md:mx-0 mx-8 md:px-10 md:py-4 py-2 px-12 opacity-40 cursor-not-allowed">
                      START LESSON
                    </button>
                  </Link>
                </ButtonWrap>
              </div>
            </Curriculum>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default IndexInitialPage;

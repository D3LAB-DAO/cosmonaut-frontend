import React from "react";
import tw from "tailwind-styled-components";
import BgV4 from "../../assets/images/bg-v4.svg";
import Navbar from "../../components/Navbar/Navbar";
import BackToOverview from "../../schema/components/BackToOverview";
import Footer from "../../components/Footer/Footer";
import { EpPlusDesc } from "./components/EpPlusDesc";
import { EpDesc } from "./components/EpDesc";
import { EpSummary } from "./components/EpSummary";
import CornerNail from "../../components/Common/Icon/CornerNail";
import bulb from "../../assets/images/light_bulb_icon.png";
import { Link } from "react-router-dom";
import { GoHome } from "../../components/Common/Icon/GoHome";
import { WhiteBtn } from "../../components/Common/Icon/WhiteBtn";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;
const ChapterTitle = tw.div`mb-4 md:mb-4 lg:mb-8`;
const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;
const ImgBulb = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;

export const EpiloguePage = () => {
  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <BackToOverview />
        <ChapterTitle>
          <div class="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
            <h2 class="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
              Epilogue
            </h2>
            <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
              [The Journey Continues]
            </h3>
          </div>
        </ChapterTitle>
        <Container>
          <div class="flex flex-wrap justify-center">
            <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
              <div class="px-2 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
                <CornerNail />
                <ImgBulb>
                  <img class="w-12" src={bulb} alt="bulb" />
                </ImgBulb>
                <Explanation>
                  <EpDesc />
                </Explanation>
                <CornerNail />
              </div>
            </div>
            <Side>
              <EpSummary />
            </Side>
          </div>
        </Container>
        <EpPlusDesc />
        <div class="py-4 flex flex-wrap items-center justify-center">
          <Link to="/">
            <GoHome>Go back to Homepage</GoHome>
          </Link>
          <Link to="/appendix/0">
            <WhiteBtn>Go to Appendix</WhiteBtn>
          </Link>
        </div>
      </Background>
      <Footer />
    </>
  );
};

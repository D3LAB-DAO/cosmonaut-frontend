import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useGetLessonPic } from "../../../libs/api/getLessonPic";
import {
  ProgressBar0,
  ProgressBar1,
  ProgressBar2,
  ProgressBar3,
  ProgressBar4,
} from "../../../components/Common/ProgressBar";
import { useGetUserProgress } from "../../../libs/api/getUserProgress";
import error from "../../../assets/images/dummy-nft.jpg";

const Container = tw.div`flex flex-wrap -mb-12`;
const Profile = tw.div`w-full md:w-1/2 lg:w-1/3 mb-12`;

function UserProgress() {
  const [zeroRes, zeroFetch] = useGetLessonPic(0);
  const [firRes, firFetch] = useGetLessonPic(1);
  const [secRes, secFetch] = useGetLessonPic(2);
  const [thrRes, thrFetch] = useGetLessonPic(3);
  const [fourRes, fourFetch] = useGetLessonPic(4);

  const [zeroPro, zeroProgress] = useGetUserProgress(0);
  const [firPro, firProgress] = useGetUserProgress(1);
  const [secPro, secProgress] = useGetUserProgress(2);
  const [thrPro, thrProgress] = useGetUserProgress(3);
  const [fourPro, fourProgress] = useGetUserProgress(4);

  const [zero, setZero] = useState("tbu");
  const [fir, setFir] = useState("tbu");
  const [sec, setSec] = useState("tbu");
  const [thr, setThr] = useState("tbu");
  const [four, setFour] = useState("tbu");

  useEffect(() => {
    zeroFetch();
    firFetch();
    secFetch();
    thrFetch();
    fourFetch();
    zeroProgress();
    firProgress();
    secProgress();
    thrProgress();
    fourProgress();
  }, []);

  const onErrorImg = (e) => {
    e.target.src = error;
  };

  return (
    <Container>
      <Profile>
        <div class="mx-2 lg:p-2 shadow rounded-2xl bg-yellow-500 p-2">
          <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
            <img
              class="block mx-auto mb-4"
              src={zeroRes}
              onError={onErrorImg}
              alt=""
            />
            <h4 class="text-2xl text-indigo-900 font-heading mb-1">Prologue</h4>
            <h3 class="text-lg text-indigo-900 font-heading mb-4">
              Get Ready for Terraforming
            </h3>
            <ProgressBar0 progress={zeroPro} />
            <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
              {zero}
            </p>
          </div>
        </div>
      </Profile>
      <Profile>
        <div class="mx-2 lg:p-2 shadow rounded-2xl bg-orange-500 p-2">
          <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
            <img
              class="block mx-auto mb-4"
              src={firRes}
              onError={onErrorImg}
              alt=""
            />
            <h4 class="text-2xl text-indigo-900 font-heading mb-1">
              Lesson. 1
            </h4>
            <h3 class="text-lg text-indigo-900 font-heading mb-4">
              Welcome to Spaceship Factory
            </h3>
            <ProgressBar1 progress={firPro} />
            <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
              {fir}
            </p>
          </div>
        </div>
      </Profile>
      <Profile>
        <div class="mx-2 lg:p-2 shadow rounded-2xl bg-green-500 p-2">
          <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
            <img
              class="block mx-auto mb-4"
              src={secRes}
              onError={onErrorImg}
              alt=""
            />
            <h4 class="text-2xl text-indigo-900 font-heading mb-1">
              Lesson. 2
            </h4>
            <h3 class="text-lg text-indigo-900 font-heading mb-4">
              Fuel Up and Load the Freight
            </h3>
            <ProgressBar2 progress={secPro} />
            <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
              {sec}
            </p>
          </div>
        </div>
      </Profile>
      <Profile>
        <div class="mx-2 lg:p-2 shadow rounded-2xl bg-blue-500 p-2">
          <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
            <img
              class="block mx-auto mb-4"
              src={thrRes}
              onError={onErrorImg}
              alt=""
            />
            <h4 class="text-2xl text-indigo-900 font-heading mb-1">
              Lesson. 3
            </h4>
            <h3 class="text-lg text-indigo-900 font-heading mb-4">
              Prepare to Launch
            </h3>
            <ProgressBar3 progress={thrPro} />
            <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
              {thr}
            </p>
          </div>
        </div>
      </Profile>
      <Profile>
        <div class="mx-2 lg:p-2 shadow rounded-2xl bg-yellow-500 p-2">
          <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
            <img
              class="block mx-auto mb-4"
              src={fourRes}
              onError={onErrorImg}
              alt=""
            />
            <h4 class="text-2xl text-indigo-900 font-heading mb-1">
              Lesson. 4
            </h4>
            <h3 class="text-lg text-indigo-900 font-heading mb-4">
              ESFERA Takeoff
            </h3>
            <ProgressBar4 progress={fourPro} />
            <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
              {four}
            </p>
          </div>
        </div>
      </Profile>
    </Container>
  );
}

export default UserProgress;

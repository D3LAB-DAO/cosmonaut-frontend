import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import { unitInfos } from "../../states/Information/unitInfoAtoms";

const OrangeHeader = tw.div`border-t-2 bg-orange-400 py-2 lg:py-6 md:py-3`;

function UnitName() {
  const { lessonID, uID, chID } = useParams();
  const unitData = useRecoilValue(unitInfos);
  const unitInfo = unitData[lessonID];

  console.log(unitInfo);

  return (
    <OrangeHeader>
      <div class="container px-4 mx-auto">
        <div class="text-center">
          <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
            {chID}-{unitInfo[chID - 1][uID - 1]?.id}.{" "}
            {unitInfo[chID - 1][uID - 1]?.title}
          </h1>
        </div>
      </div>
    </OrangeHeader>
  );
}

export default UnitName;

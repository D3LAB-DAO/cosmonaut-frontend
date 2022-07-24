import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import flask from "../../assets/images/flask_icon.png";
import check from "../../assets/images/check_icon.png";

const Container = tw.div`mb-2 w-full mx-auto`;

function ProgressBar(progress) {
  const [width, setWidth] = useState("");
  console.log(width);
  console.log(progress);

  useEffect(() => {
    if (progress === "-1") {
      setWidth(0);
    } else if (progress === "0") {
      setWidth(100);
    } else {
      setWidth(42);
    }
  }, []);

  return (
    <Container>
      <div class="w-full rounded-full bg-gray-200 mb-1">
        <div
          class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
          style={{ width: `${width}%` }}
          // style={{ width: "100%" }}
        >
          <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
        </div>
      </div>
      <div class="grid grid-cols-6 md:gap-6 gap-4 justify-between my-2">
        <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
          <img class="w-4 h-4" src={flask} alt="flask" />
        </span>
        <span class="md:text-sm text-xs font-medium text-gray-700">Chp.1</span>
        <span class="md:text-sm text-xs font-medium text-gray-700">Chp.2</span>
        <span class="md:text-sm text-xs font-medium text-gray-700">Chp.3</span>
        <span class="md:text-sm text-xs font-medium text-gray-700">Chp.4</span>
        <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
          <img class="w-4 h-4" src={check} alt="check" />
        </span>
      </div>
    </Container>
  );
}

export default ProgressBar;

import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import flask from "../../assets/images/flask_icon.png";
import check from "../../assets/images/check_icon.png";

const Container = tw.div`mb-2 w-full mx-auto`;

export const ProgressBar0 = (progress) => {
  const [width, setWidth] = useState();
  useEffect(() => {
    switch (progress.progress) {
      case 0:
        setWidth(100);
        break;
      default:
        setWidth(5);
    }
  }, [progress]);

  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar1 = (progress) => {
  const [width, setWidth] = useState();
  useEffect(() => {
    switch (progress.progress) {
      case 0:
        setWidth(100);
        break;
      case 1:
        setWidth(14);
        break;
      case 2:
        setWidth(29);
        break;
      case 3:
        setWidth(43);
        break;
      case 4:
        setWidth(58);
        break;
      case 5:
        setWidth(72);
        break;
      case 6:
        setWidth(86);
        break;
      default:
        setWidth(5);
    }
  }, [progress]);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.4
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.5
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.6
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar2 = (progress) => {
  const [width, setWidth] = useState();
  useEffect(() => {
    switch (progress.progress) {
      case 0:
        setWidth(100);
        break;
      case 1:
        setWidth(11);
        break;
      case 2:
        setWidth(22);
        break;
      case 3:
        setWidth(33);
        break;
      case 4:
        setWidth(45);
        break;
      case 5:
        setWidth(56);
        break;
      case 6:
        setWidth(67);
        break;
      case 7:
        setWidth(79);
        break;
      case 8:
        setWidth(91);
        break;
      default:
        setWidth(5);
    }
  }, [progress]);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.4
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.5
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.6
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.7
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.8
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar3 = (progress) => {
  const [width, setWidth] = useState();
  useEffect(() => {
    switch (progress.progress) {
      case 0:
        setWidth(100);
        break;
      case 1:
        setWidth(25);
        break;
      case 2:
        setWidth(50);
        break;
      case 3:
        setWidth(75);
        break;
      default:
        setWidth(5);
    }
  }, [progress]);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar4 = (progress) => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    switch (progress.progress) {
      case 0:
        setWidth(100);
        break;
      case 1:
        setWidth(25);
        break;
      case 2:
        setWidth(50);
        break;
      case 3:
        setWidth(75);
        break;
      default:
        setWidth(5);
    }
  }, [progress]);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import Arrowleft from "../../../assets/images/arrow-left.svg";
import Arrowright from "../../../assets/images/arrow-right.svg";
import HandleSideMenu from "../../../schema/components/Navigator/Components/HandleSideMenu";

const AdvNavigator = () => {
  const { adID, iID } = useParams();
  const nextIndex = Number(iID) + 1;
  const prevIndex = Number(iID) - 1;
  const navigate = useNavigate();

  const Container = tw.div`z-auto fixed transition ease-out duration-100 hover:opacity-100 focus:opacity-100 bottom-0 w-full z-50 border-3 border-indigo-900 bg-gray-50`;

  const handleRight = () => {
    switch (adID) {
      case "1":
        switch (iID) {
          case "2":
            navigate(`/lesson/1/chapter/1/unit/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${nextIndex}`);
        }
        break;
      case "2":
        switch (iID) {
          case "3":
            navigate(`/lesson/2/chapter/1/unit/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${nextIndex}`);
        }
        break;
      case "3":
        switch (iID) {
          case "3":
            navigate(`/lesson/4/chapter/1/unit/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${nextIndex}`);
        }
        break;
      default:
        break;
    }
  };
  const handleLeft = () => {
    switch (adID) {
      case "1":
        switch (iID) {
          case "0":
            navigate(`/advanced/1/index/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${prevIndex}`);
        }
        break;
      case "2":
        switch (iID) {
          case "0":
            navigate(`/advanced/2/index/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${prevIndex}`);
        }
        break;
      case "3":
        switch (iID) {
          case "0":
            navigate(`/advanced/3/index/0`);
            break;
          default:
            navigate(`/advanced/${adID}/index/${prevIndex}`);
        }
        break;
      default:
        break;
    }
  };
  window.addEventListener("scroll", (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const navigator = document.querySelectorAll("#navigator");
      navigator[0].classList?.add("opacity-100");
      navigator[0].classList?.remove("opacity-0");
    } else {
      const navigator = document.querySelectorAll("#navigator");
      navigator[0].classList?.add("opacity-0");
      navigator[0].classList?.remove("opacity-100");
    }
  });
  let title = "";
  switch (adID) {
    case "1":
      title = "CW2981 Royalties";
      break;
    case "2":
      title = "CW1155";
      break;
    case "3":
      title = "Create Real Random Numbers";
      break;
    default:
      title = "tbu";
      break;
  }
  return (
    <Container id="navigator">
      <div class="container flex mx-auto lg:pb-4 lg:pt-3 py-2 items-center">
        <div class="lg:w-1/2 w-2/3 items-center md:px-2 px-4 mb-0">
          <div class="w-full flex flex-wrap items-center">
            <HandleSideMenu />
            <h2 class="text-xl md:text-2xl lg:text-3xl self-end md:mr-4 mr-2 text-indigo-900 font-heading">
              Advanced {adID}
            </h2>
            <h3 class="text-sm md:text-lg lg:text-xl self-end text-orange-400 font-heading">
              {title}
            </h3>
          </div>
        </div>
        <div class="lg:w-1/2 w-1/3 md:px-4 px-2">
          <div class="w-full flex flex-wrap items-center justify-end ">
            <button onClick={handleLeft}>
              <div class="bg-green-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded ease-in-out duration-300 transform hover:scale-110 hover:translate-x-2">
                <img class="w-6 h-5 mx-auto mt-1" src={Arrowleft} alt="" />
              </div>
            </button>
            <button onClick={handleRight}>
              <div class="bg-blue-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded ease-in-out duration-300 transform hover:scale-110 hover:translate-x-2">
                <img class="w-6 h-5 mx-auto mt-1" src={Arrowright} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdvNavigator;

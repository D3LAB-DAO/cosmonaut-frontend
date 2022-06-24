import React from "react";
import { Link, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";

const Header = tw.h1`mx-auto text-center mt-24 mb-20`;
const Button = tw.div`flex flex-wrap mt-10 lg:justify-end justify-center`;

function IndexPage() {
  const { lessonID } = useParams();
  const goUrl = `/lesson/${lessonID}/chapter/1`;
  return (
    <div>
      <Header>IndexPage</Header>
      <Button>
        <Link to={goUrl}>
          <button class="animate-bounce inline-block w-full md:w-auto mb-2 md:mb-0 py-4 px-10 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-green-500 hover:to-blue-500 border-3 border-indigo-900 shadow rounded-full transition duration-200 md:mx-0 mx-8 hover:text-white">
            START LESSON
          </button>
        </Link>
      </Button>
    </div>
  );
}

export default IndexPage;

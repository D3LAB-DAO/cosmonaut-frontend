import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function L0C1Start(props) {
  const navigate = useNavigate();
  const { lessonID, chID } = useParams();
  function handleStart(e) {
    e.preventDefault();
    navigate(`/lesson/${lessonID}/chapter/${chID}/unit/1`);
  }

  return (
    <div>
      <h1>L0C1Start</h1>
      <button
        onClick={handleStart}
        class="animate-bounce block mt-12 mb-72 mx-auto md:mb-4 text-center text-lg border-3 transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white"
      >
        Get Started
      </button>
    </div>
  );
}

export default L0C1Start;

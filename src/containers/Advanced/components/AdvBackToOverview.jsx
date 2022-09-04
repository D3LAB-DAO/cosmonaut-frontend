import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function AdvBackToOverview() {
  const { adID } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <button
        class="inline-flex mb-2 text-yellow-500 transition ease-in-out duration-300 translate transform hover:-translate-x-2 hover:scale-105"
        onClick={() => navigate(`/lesson/${adID}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="md:h-6 md:w-6 h-4 w-4 mr-1 mt-1"
          fill="none"
          viewbox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span class="md:text-lg text-sm font-extrabold mt-1">
          Back to Overview
        </span>
      </button>
    </>
  );
}

export default AdvBackToOverview;

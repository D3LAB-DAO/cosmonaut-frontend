import React from "react";
import { useParams } from "react-router-dom";

export const L2C4Step = () => {
  const { uID } = useParams();
  return (
    <>
      <div class="md:mx-2 mx-4 lg:mb-16 mb-8">
        <nav aria-label="Progress">
          <ol class="flex">
            {uID === "1" ? (
              <>
                <li class="relative pr-4 sm:pr-8">
                  <div class="relative w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full">
                    <span class="font-extrabold text-center text-indigo-900">
                      1
                    </span>
                  </div>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      </div>
    </>
  );
};

import React from "react";
import { GoHome } from "../components/Common/Icon/GoHome";
import Bgv4 from "../assets/images/bg-v4.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { WhiteBtn } from "../components/Common/Icon/WhiteBtn";

function NotFound(props) {
  return (
    <>
      <section
        class="py-26 md:py-52 md:min-h-0 bg-black bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${Bgv4})` }}
      >
        <div class="container px-4 mx-auto">
          <div class="max-w-xl mx-auto text-center">
            <span class="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
              Error 404
            </span>
            <h1 class="text-3xl sm:text-4xl xl:text-5xl font-heading mb-3 font-semibold">
              Page not found
            </h1>
            <p class="text-xl leading-7 mb-6 font-semibold">
              Something went wrong, so this page is broken.
            </p>
            <div class="flex flex-wrap items-center justify-center">
              <Link to="/">
                <GoHome>Go back to Homepage</GoHome>
              </Link>
              <Link to="/">
                <WhiteBtn>Try Again</WhiteBtn>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;

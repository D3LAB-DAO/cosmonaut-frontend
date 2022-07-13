import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import tw from "tailwind-styled-components";

import LogoV4 from "../../assets/images/logo-v4.svg";
import GithubLogo from "../../assets/images/github-logo-black.svg";
import GoogleLogo from "../../assets/images/google.svg";
import Footer from "../../components/Footer/Footer";
import GoogleLogin from "../../libs/api/GoogleLogin";

const Container = tw.div`py-24 bg-space-3 relative pt-32`;
const SignUpLogo = tw.a`flex items-center justify-center md:mx-4 mb-6 py-3 px-6 leading-6 text-lg font-bold md:font-extrabold bg-green-500 hover:bg-yellow-500 hover:text-black border-3 border-indigo-900 shadow rounded-lg transition duration-200`;

function SignUp() {
  return (
    <>
      <Navbar />
      <Container>
        <div class="container px-4 mx-auto relative">
          <div class="py-24 px-6 border-indigo-900 shadow bg-gray-500 rounded-2xl max-w-2xl mx-auto md:px-16 lg:pb-32">
            <div class="text-center mb-8">
              <a class="inline-block mx-auto mb-4" href="/">
                <img class="h-20" src={LogoV4} alt="" />
              </a>
              <p class="text-xl font-heading leading-7 text-yellow-500 mb-16">
                Start Coswasm with Cosmonaut!
              </p>
            </div>
            <div>
              <SignUpLogo href="/">
                <img
                  class="block rounded-full bg-white py-1.5 px-1.5 w-8 h-8 mr-3"
                  src={GithubLogo}
                  alt=""
                />
                <span>Sign in with Github</span>
              </SignUpLogo>
              <GoogleLogin />
              <p class="text-center text-orange-400 font-extrabold">
                Already have accounts?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;

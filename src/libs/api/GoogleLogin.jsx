import axios from "axios";
import React from "react";
import tw from "tailwind-styled-components";
import GoogleLogo from "../../assets/images/google.svg";

const SignUpLogo = tw.button`flex items-center justify-center md:mx-4 mb-6 py-3 px-6 leading-6 text-lg font-bold md:font-extrabold bg-green-500 hover:bg-yellow-500 hover:text-black border-3 border-indigo-900 shadow rounded-lg transition duration-200`;

function GoogleLogin(props) {
  const loginGoogle = async e => {
    const option = {
      method: "get",
      url: "http://127.0.0.1:3334/auth/login/federated/google",
      header: { "Content-Type": "application/json" },
    };
    e.preventDefault();
    try {
      let res = await axios(option);
      console.log(res);
    } catch (err) {
      alert("Login Falied");
    }
  };
  return (
    <>
      <SignUpLogo onClick="location.href = 'http://127.0.0.1:3334/auth/login/federated/google'">
        <img
          class="block rounded-full bg-white py-1.5 px-1.5 w-8 h-8 mr-3"
          src={GoogleLogo}
          alt=""
        />
        <span>Sign in with Google</span>
      </SignUpLogo>
    </>
  );
}

export default GoogleLogin;

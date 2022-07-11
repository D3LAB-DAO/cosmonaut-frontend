import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Curriculum from "./components/Curriculum";
import Overview from "./components/Overview";

const Container = tw.div`relative lg:pb-20 bg-cover bg-center bg-opacity-10 lg:pt-32`;

function IndexPage() {
  return (
    <>
      <Navbar />
      <Container
        style={{
          height: "1100px",
          backgroundImage: `url(${require("../../assets/images/25-spacehole-2x.jpg")})`,
        }}
      >
        <div class="container lg:px-8 mx-auto relative mb-24">
          <div class="grid grid-cols-2 w-full mx-auto lg:gap-12 lg:-mx-4">
            <Overview />
            <Curriculum />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default IndexPage;

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Learn from "./components/Learn";
import Made from "./components/Made";
import Special from "./components/Special";
import axios from "axios";

function MainPage() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Learn />
      <Special />
      <Made />
      <Footer />
    </>
  );
}

export default MainPage;

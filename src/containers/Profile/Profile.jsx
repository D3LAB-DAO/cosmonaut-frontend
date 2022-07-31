import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Translucent from "../../assets/images/spaceship-translucent.png";
import Footer from "../../components/Footer/Footer";
import ProfileHeader from "./components/ProfileHeader";
import UserProgress from "./components/UserProgress";

const Background = tw.div`container mx-auto relative pt-12 bg-fixed bg-top bg-origin-content bg-no-repeat pb-20 mx:px-20 px-8`;

function Profile() {
  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${Translucent})` }}>
        <ProfileHeader />
        <UserProgress />
      </Background>
      <Footer />
    </>
  );
}

export default Profile;

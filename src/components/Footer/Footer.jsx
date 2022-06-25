import React from "react";
import tw from "tailwind-styled-components";
import LogoV4 from "../../assets/images/logo-v4.svg";

const Container = tw.div`border-t px-8 lg:px-20 lg:pt-20 lg:pb-24 pb-20 pt-10 bg-cover bg-center bg-black`;
const Logo = tw.a`text-lg font-bold`;

function Footer() {
  return (
    <Container>
      <div class="pb-6">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-between items-center">
            <div class="w-full flex flex-wrap justify-between items-center mb-4">
              <Logo href="/cosmonaut-frontend">
                <img class="md:h-9 h-8 py-1" src={LogoV4} alt="" width="auto" />
              </Logo>
              <p class="lg:text-lg text-xs font-mono text-right">
                Become a pioneer of Cosmos!
                <br />© 2022 D3LAB. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

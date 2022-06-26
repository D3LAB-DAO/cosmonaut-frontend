import React from "react";
import tw from "tailwind-styled-components";
import Check from "../../components/Common/Icon/Check";

const Container = tw.div`mx-auto flex flex-wrap justify-center px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6`;
const Contents = tw.div`lg:w-1/2 w-full md:w-2/3`;
const ContentTitle = tw.div`mb-4 md:mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function ContentSchema({ uInfo, content }) {
  return (
    <>
      <Container>
        <Check />
        <Contents>
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                  {uInfo?.subTitle}
                </h1>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>{content}</ContentDesc>
        </Contents>
      </Container>
    </>
  );
}

export default ContentSchema;

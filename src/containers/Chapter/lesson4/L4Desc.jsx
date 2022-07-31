import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";
import ListStyle from "../../../components/Contents/ListStyle";

function L4Desc() {
  return (
    <>
      <ChapterDesc>
        In this lesson, we are going to make a simple spaceship game that
        stochastically avoids asteroids.
        <br />
        <br />
        It's going to be a tough journey.
        <ListStyle>
          <li>10 rounds.</li>
          <li>Consume 100 fuels for each round.</li>
          <li>
            The more freights you have, the heavier the ship will be. It makes
            hard to avoid asteroids.
          </li>
        </ListStyle>
      </ChapterDesc>
    </>
  );
}

export default L4Desc;

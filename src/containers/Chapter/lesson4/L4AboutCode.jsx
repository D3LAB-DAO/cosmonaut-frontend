import React from "react";
import AboutCode from "../../../components/Contents/AboutCode";
import ListStyle from "../../../components/Contents/ListStyle";

function L4AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>Condition of Success</AboutCode>
      <ListStyle>
        <li>
          When you pass the all rounds, if she has health and fuels left, you’ve
          successfully escaped the asteroid belt 🚀
        </li>
      </ListStyle>
      <AboutCode>Condition of Failure</AboutCode>
      <ListStyle>
        <li>The ship has been drifted if there remains any round 💫</li>
        <li>The ship has been wrecked if she run out of health 😭</li>
      </ListStyle>
    </div>
  );
}

export default L4AboutCode;

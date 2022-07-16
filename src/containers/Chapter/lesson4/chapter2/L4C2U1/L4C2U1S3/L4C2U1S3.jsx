import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash

let decrease_health_msg = Cw721ExecuteMsg::DecreaseHealth {
  token_id: token_id.clone(),
  value: health_decrease_value,
};

let decrease_health_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
  contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),
  msg: to_binary(&decrease_health_msg)?,
  funds: vec![],
});

let burn_fuel_msg = Cw721ExecuteMsg::BurnFuel {
  token_id,
  amount: Uint128::new(FUEL_PER_GAME)
      .checked_mul(epoch)
      .map_err(StdError::overflow)?,
};

let burn_fuel_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
  contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),
  msg: to_binary(&burn_fuel_msg)?,
  funds: vec![],
});

Ok(Response::new()
  .add_attribute("action", "play_game")
  .add_attribute("decreased_health_value", health_decrease_value.to_string())
  .add_attribute(
      "decreased_fuel_value",
      (FUEL_PER_GAME * epoch.u128()).to_string(),
  )
  .add_attribute("spaceship_speed", spaceship_speed.to_string())
  .add_messages([decrease_health_msg_wrap, burn_fuel_msg_wrap]))
}
\`\`\``;

function L4C2U1S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>The fate of the spaceship is</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                When all rounds are completed, change the status of the
                spaceship.
              </BasicP>
              <BasicP>
                1. Decrease health by{" "}
                <CodeBlock>health_decrease_value</CodeBlock>. You can use the
                message <CodeBlock>DecreaseHealth</CodeBlock>.
              </BasicP>
              <BasicP>
                2. Calculate the amount of fuel consumed by multiplying
                <CodeBlock>FUEL_PER_GAME</CodeBlock> by the number of rounds{" "}
                <CodeBlock>epoch</CodeBlock>. Use{" "}
                <CodeBlock>BurnFuel</CodeBlock>
                message to reduce fuel.
              </BasicP>
              <BasicP>
                Will the spaceship be able to get through the asteroid belt
                safely? Or not?
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L4C2U1S3;

export const code = [
  `
  \`\`\`bash
  ExecuteMsg::PlayGame { token_id, epoch } => execute::play_game(deps, env, token_id, epoch),
  \`\`\``,
  `
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
\`\`\``,
];

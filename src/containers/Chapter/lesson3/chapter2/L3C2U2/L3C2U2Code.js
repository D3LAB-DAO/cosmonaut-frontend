export const code = [
  `
\`\`\`rust
ExecuteMsg::LoadFreight {
    token_id,
    denom,
    amount,
    unit_weight,
} => execute::load_freight(deps, token_id, denom, amount, unit_weight),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::UnloadFreight {
  token_id,
  denom,
  amount,
} => execute::unload_freight(deps, token_id, denom, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BurnFuel { token_id, amount } => {
  execute::burn_fuel(deps, info, token_id, amount)
}
\`\`\``,
];

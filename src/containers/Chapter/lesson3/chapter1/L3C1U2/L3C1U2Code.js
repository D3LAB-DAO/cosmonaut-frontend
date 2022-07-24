export const code = [
  `
  \`\`\`rust
  ExecuteMsg::Mint(mint_msg) => execute::mint_to_cw721_contract(deps, info, mint_msg),
  \`\`\``,
  `
\`\`\`rust
ExecuteMsg::BuyMoneyToken { amount } => execute::buy_money_token(deps, info, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BuyFreightToken { address, amount } => {
  execute::buy_freight_token(deps, info, address, amount)
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BuyFuelToken { amount } => execute::buy_fuel_token(deps, info, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BuyNft { nft_id } => execute::buy_spaceship(deps, info, nft_id),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::LoadFreight {
  address,
  token_id,
  amount,
} => execute::load_freight_to_nft(deps, info, address, token_id, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::UnloadFreight {
  address,
  token_id,
  amount,
} => execute::unload_freight_from_nft(deps, info, address, token_id, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BurnFuel { token_id, amount } => execute::burn_fuel(deps, token_id, amount),
\`\`\``,
];

export const codeEx = {
  Q1: `pub fn play_game(
    deps: DepsMut,
    env: Env,
    token_id: String,
    epoch: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let nft_info: NftInfoResponse<Metadata> = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract.as_ref().to_string(),
        &Cw721QueryMsg::NftInfo {
            token_id: token_id.clone(),
        },
    )?;

    // Question 1. get total weight of freights
    let total_freight_weight: u128 = /* Do yourself! */

    let mut health_decrease_value = Uint128::zero();
    let mut spaceship_speed = Uint128::zero();

    let total_health = nft_info.extension.health;
    let step = total_health.div(epoch);`,
  Q2: `    for _ in 0..epoch.u128() {
    let timestamp_int_nanos = Uint128::new(u128::from(env.block.time.nanos()));
    let random_number = _generate_random_number(timestamp_int_nanos);
    spaceship_speed = Uint128::new(MAX_FREIGHT_WEIGHT)
        - Uint128::new(MAX_FREIGHT_WEIGHT)
            .multiply_ratio(total_freight_weight, MAX_FREIGHT_WEIGHT);

    // Question 1. Decrease health_decrease_value if (random_number > spaceship_speed)
    // Do yourself!
}`,
};

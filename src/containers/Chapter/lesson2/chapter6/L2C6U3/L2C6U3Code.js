export const code = [
  `
\`\`\`rust
QueryMsg::Balance { address } => to_binary(&query_balance(deps, address)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::TokenInfo {} => to_binary(&query_token_info(deps)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::Minter {} => to_binary(&query_minter(deps)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::Allowance { owner, spender } => {
  to_binary(&query_allowance(deps, owner, spender)?)
}
\`\`\``,
  `
\`\`\`rust
QueryMsg::MarketingInfo {} => to_binary(&query_marketing_info(deps)?),
\`\`\``,
  `
\`\`\`rust
pub fn query_marketing_info(deps: Deps) -> StdResult<MarketingInfoResponse> {
  Ok(MARKETING_INFO.may_load(deps.storage)?.unwrap_or_default())
}
\`\`\``,
  `
\`\`\`rust
QueryMsg::DownloadLogo {} => to_binary(&query_download_logo(deps)?),
\`\`\``,
  `
\`\`\`rust
pub fn query_download_logo(deps: Deps) -> StdResult<DownloadLogoResponse> {
  let logo = LOGO.load(deps.storage)?;
  match logo {
      Logo::Embedded(EmbeddedLogo::Svg(logo)) => Ok(DownloadLogoResponse {
          mime_type: "image/svg+xml".to_owned(),
          data: logo,
      }),
      Logo::Embedded(EmbeddedLogo::Png(logo)) => Ok(DownloadLogoResponse {
          mime_type: "image/png".to_owned(),
          data: logo,
      }),
      Logo::Url(_) => Err(StdError::not_found("logo")),
  }
}
\`\`\``,
];

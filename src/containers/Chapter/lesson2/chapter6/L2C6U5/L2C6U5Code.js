export const code = [
  `
  \`\`\`rust
  ExecuteMsg::UpdateMarketing {
      project,
      description,
      marketing,
  } => execute_update_marketing(deps, env, info, project, description, marketing),
  \`\`\``,
  `
  \`\`\`rust
  pub const MARKETING_INFO: Item<MarketingInfoResponse> = Item::new("marketing_info");
  \`\`\``,
  `
  \`\`\`rust
  #[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
  pub struct MarketingInfoResponse {
      pub project: Option<String>,
      pub description: Option<String>,
      pub logo: Option<LogoInfo>,
      pub marketing: Option<Addr>,
  }
  \`\`\``,
  `
\`\`\`rust
ExecuteMsg::UploadLogo(logo) => execute_upload_logo(deps, env, info, logo),
\`\`\``,
];

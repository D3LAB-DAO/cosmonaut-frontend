import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Alert from "../../../../../components/Contents/Alert";
import BasicP from "../../../../../components/Contents/BasicP";
import BlueID from "../../../../../components/Contents/BlueID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
QueryMsg::MoneyBalance { address } => query::money_balance(deps, address),
\`\`\``;
const code2 = `
\`\`\`rust
pub fn money_balance(deps: Deps, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let validated_addr = deps.api.addr_validate(&address)?;
    let res: BalanceResponse = deps.querier.query_wasm_smart(
        config.money_cw20_contract,
        &Cw20QueryMsg::Balance {
            address: validated_addr.to_string(),
        },
    )?;
    to_binary(&res)
}
\`\`\``;

const code3 = `
\`\`\`rust
QueryMsg::FreightTokenBalance { symbol, address } => {
    query::freight_token_balance(deps, symbol, address)
}
\`\`\``;
const code4 = `
\`\`\`rust
pub fn freight_token_balance(deps: Deps, symbol: String, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;

    let target_contract_addr = config
        .freight_contracts
        .into_iter()
        .find(|c| c.denom == symbol);

    match target_contract_addr {
        Some(f) => {
            let freight_contract_addr = f.address;
            let res: BalanceResponse = deps
                .querier
                .query_wasm_smart(freight_contract_addr, &Cw20QueryMsg::Balance { address })?;
            to_binary(&FreightTokenBalanceResponse {
                symbol,
                balance: res.balance,
            })
        }
        None => to_binary(&FreightTokenBalanceResponse {
            symbol,
            balance: Uint128::zero(),
        }),
    }
}
\`\`\``;

const code5 = `
\`\`\`rust
QueryMsg::FuelBalance { address } => query::fuel_balance(deps, address),
\`\`\``;
const code6 = `
\`\`\`rust
pub fn fuel_balance(deps: Deps, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let validated_addr = deps.api.addr_validate(&address)?;

    let res: BalanceResponse = deps.querier.query_wasm_smart(
        config.fuel_cw20_contract,
        &Cw20QueryMsg::Balance {
            address: validated_addr.to_string(),
        },
    )?;
    to_binary(&res)
}
\`\`\``;

const code7 = `
\`\`\`rust
QueryMsg::OwnerOfSpaceShip { token_id } => query::owner_of_spaceship(deps, token_id),
\`\`\``;
const code8 = `
\`\`\`rust
pub fn owner_of_spaceship(deps: Deps, token_id: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let res: OwnerOfResponse = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract,
        &Cw721QueryMsg::OwnerOf {
            token_id,
            include_expired: None,
        },
    )?;
    to_binary(&res)
}
\`\`\``;

const code9 = `
\`\`\`rust
QueryMsg::SpaceShipInfo { token_id } => query::spaceship_info(deps, token_id),
\`\`\``;
const code10 = `
\`\`\`rust
pub fn spaceship_info(deps: Deps, token_id: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let res: NftInfoResponse<Extension> = deps
        .querier
        .query_wasm_smart(config.spaceship_cw721_contract, &NftInfo { token_id })?;
    to_binary(&res)
}
\`\`\``;

const code11 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {
    pub spaceship_cw721_contract: Addr,
    pub money_cw20_contract: Addr,
    pub fuel_cw20_contract: Addr,
    pub freight_contracts: Vec<FreightContractInfo>,
}
\`\`\``;
const code12 = `
\`\`\`rust
QueryMsg::Config {} => query::config(deps),
\`\`\``;
const code13 = `
\`\`\`rust
pub fn config(deps: Deps) -> StdResult<Binary> {
    to_binary(&ConfigResponse {
        config: CONFIG.load(deps.storage)?,
    })
}
\`\`\``;

function L3C1U3() {
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>1</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>MoneyBalance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                <CodeBlock>MoneyBalance</CodeBlock> returns the balance of{" "}
                <CodeBlock>address</CodeBlock> for <CodeBlock>money</CodeBlock>.
              </BasicP>
              <BasicP>
                You can send a <CodeBlock>Balance</CodeBlock> message directly
                to the <CodeBlock>money</CodeBlock> FT contract, but the config
                in this main contract allows you to deliver the{" "}
                <CodeBlock>Balance</CodeBlock> message to the recorded{" "}
                <CodeBlock>money_cw20_contract</CodeBlock>
                without having to store a separate address.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>2</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>FreightTokenBalance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                <CodeBlock>FreightTokenBalance</CodeBlock> returns the balance
                of <CodeBlock>address</CodeBlock> for{" "}
                <CodeBlock>symbol</CodeBlock>
                freight.
              </BasicP>
              <BasicP>
                You can send a <CodeBlock>Balance</CodeBlock> message directly
                to the freight FT contract, but the config in this main contract
                allows you to send a <CodeBlock>Balance</CodeBlock> message to
                one of the recorded <CodeBlock>freight_contracts</CodeBlock>,
                which has matched <CodeBlock>symbol</CodeBlock>, without having
                to store a separate address.
              </BasicP>
              <BasicP>
                <CodeBlock>iter</CodeBlock> and <CodeBlock>find</CodeBlock> are
                used to find the address of the freight FT with corresponding{" "}
                <CodeBlock>symbol</CodeBlock> among several freights.
              </BasicP>
              <Alert>
                Since <CodeBlock>symbols</CodeBlock> can overlap, it is safer to
                distinguish freights by address.
              </Alert>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>3</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>FuelBalance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code5} />
              <Markdown code={code6} />
              <BasicP>
                <CodeBlock>FuelBalance</CodeBlock> returns the balance of{" "}
                <CodeBlock>address</CodeBlock> for <CodeBlock>fuel</CodeBlock>{" "}
                FT.
              </BasicP>
              <BasicP>
                You can send a <CodeBlock>Balance</CodeBlock> message directly
                to the <CodeBlock>fuel</CodeBlock> FT contract, but the config
                in this main contract allows you to deliver the
                <CodeBlock>Balance</CodeBlock> message to the recorded{" "}
                <CodeBlock>fuel_cw20_contract</CodeBlock> without having to
                store a separate address.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>4</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>FuelBalance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code7} />
              <Markdown code={code8} />
              <BasicP>
                <CodeBlock>OwnerOfSpaceShip</CodeBlock> returns the owner of{" "}
                <CodeBlock>token_id</CodeBlock>.
              </BasicP>
              <BasicP>
                You can send the <CodeBlock>OwnerOf</CodeBlock> message directly
                to the NFT contract, but the config of this main contract allows
                you to deliver the
                <CodeBlock>OwnerOf</CodeBlock> message to{" "}
                <CodeBlock>spaceship_cw721_contract</CodeBlock> without having
                to store a separate address.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>5</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SpaceShipInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code9} />
              <Markdown code={code10} />
              <BasicP>
                <CodeBlock>SpaceShipInfo</CodeBlock> returns information from{" "}
                <CodeBlock>token_id</CodeBlock>.
              </BasicP>
              <BasicP>
                You can send the message <CodeBlock>NftInfoResponse</CodeBlock>{" "}
                directly to the NFT contract, but the config of this main
                contract allows you to send the message{" "}
                <CodeBlock>NftInfoResponse</CodeBlock> to the{" "}
                <CodeBlock>spaceship_cw721_contract</CodeBlock>
                without having to store a separate address.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>6</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Config</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code11} />
              <Markdown code={code12} />
              <Markdown code={code13} />
              <BasicP>
                Returns the config of this main contract.{" "}
                <CodeBlock>config</CodeBlock> consists of the address of the
                CW721 contract, the address of the <CodeBlock>money</CodeBlock>{" "}
                FT, the address of the <CodeBlock>fuel</CodeBlock> FT, and the
                addresses of the freight FTs as a vector.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L3C1U3;

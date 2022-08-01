export const codeEx = {
  Q1: `
    pub fn instantiate(
        &self,
        deps: DepsMut,
        _env: Env,
        _info: MessageInfo,
        msg: InstantiateMsg,
    ) -> StdResult<Response<C>> {
        set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    
        // Question 1: set info
        // Do it yourself!
        self.contract_info.save(deps.storage, &info)?;
        let minter = deps.api.addr_validate(&msg.minter)?;
    
        // Question 2: set minter
        // Do it yourself!
    
        Ok(Response::default())
    }`,
};

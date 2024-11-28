const { queryContract, sumTokens } = require("../helper/chain/cosmos");


const veloManager = "neutron12k5xuvlhkatrux2z2aex77gdyn2tmlx4s8z6u8gejuq5j3d0jg9qpyuza9";
const baseDenom = "untrn";

async function tvl(api) {
  const gameContracts = await queryContract({ contract: veloManager, chain: "neutron", data: "{\"games\":{}}" });
  return await sumTokens({
    owners: gameContracts,
    chain: "neutron", 
    tokens: [baseDenom],
    api,
  });
}

module.exports = {
  methodology: "Queries the Velo.Space Manager contract to get all the game contracts. Each game contract is then queried to sum up total held $NTRN.",
  neutron: {
    tvl
  }
}
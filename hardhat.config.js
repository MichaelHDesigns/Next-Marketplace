require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

const privateKey = fs.readFileSync(".secret").toString().trim();
const appId = fs.readFileSync(".appId").toString().trim();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 2330
    },
    altcoinchain: {
      // maticvigil mumbai, you can use any other RPC u want.
      url: `https://rpc0.altcoinchain.org/rpc`,
      accounts: [privateKey]
    },
    matic: {
      // maticvigil matic
      url: `https://rpc-mainnet.maticvigil.com/v1/${appId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;
const etherscanKey = process.env.ETHERSCAN_KEY;


module.exports = {
  solidity: {
    version: "0.8.4",
  },
  networks: {
    mumbai: {
      url: endpoint,
      accounts: [`0x${privateKey}`]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  }
}
// 0x5c761567Ba02a61Ef3b694B95fE0F20A37b5226F
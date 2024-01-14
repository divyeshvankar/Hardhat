require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();



const ALCHEMY_API_KEY = process.env.KEY;

const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

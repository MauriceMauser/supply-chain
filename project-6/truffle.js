const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "8f9d7cac669a497da5ee9e5e7909b277";
const mnemonic = "poet purchase impact cigar large spy romance better ripple this salute uphold";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infuraKey}`),
       network_id: 4,       // Rinkeby's id
       gas: 4552225,        // Rinkeby has a lower block limit than mainnet
       gasPrice: 10000000000,
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    },
  }
};
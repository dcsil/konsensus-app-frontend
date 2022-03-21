const path = require('path');

module.exports = {
  contracts_build_directory: path.join(
    __dirname,
    'client/src/contracts'
  ),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
    test: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      excludeContracts: ['Migrations'],
    },
  },
  plugins: ['solidity-coverage'],
};

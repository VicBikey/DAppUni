require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: [/node_modules/]
});
require('core-js/stable');
require('regenerator-runtime/runtime');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.20", // Specify your desired solc version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};

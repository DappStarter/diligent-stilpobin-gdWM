require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind hub harvest glory bridge shell'; 
let testAccounts = [
"0x1a54e6e0aebf4a1bf7392105aa2d818174339da965a1e1a4ec621d0a64bb49fc",
"0x8c73e3b2f97e978c72993ef58318c77858b6a9d491fed04829b8a4144f848a91",
"0x58eed115d569b2e320cb6d0407dff6aae238b598fd4332d0af058341a44aeb16",
"0x1b2f826165421400159ae447ef441ad5dd42d7eb5d76dbf977923cfaad646bee",
"0xaf9ba3e00a58bbbc8a64773ad4d7faf2e54bb09539482b0edf4525be861ea5b8",
"0x5dde63f754a01733b679aef49d331618b6e8fde68da8383c77660a02f4ce0c69",
"0x7a4d27dae07fef2e5a90f3d4c2286a4d5e90b8f751416501b947e3d7ba6f5746",
"0x8cdb32c668b93382527c64ae1d3bd2ef75a3d3d92bc4158284e2efc34f4de51d",
"0xefdc68d5bd7ea00a2b3f779be6eb32235c9a48712f1fe4da98649163c25fb4f8",
"0xd31e0e38a3b14500acc0ea82472f9ae15b02f8c3ecba492f7368813567da942b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember push inflict enroll forget sleep'; 
let testAccounts = [
"0x05bc4fb0a55a2c7f028b28b9c050346984723f4514bd5633cbca8995c3df2085",
"0x5d5fb40458628244e7fb185188994801dd8817b19e2c8b2e338c92f7f1abfa98",
"0xf645a474dc204feefa63373d076b3a9c762472065d5baee1e23d4a4a23e901f1",
"0xa13e64d10b2e88267d0b2247561c42eb6b5f8ef3db66119de1a7dd93c20203dd",
"0xa38bd29fba90cf1e409a746a39350c23dda4d40b5b6487cb16a728aa02e63e79",
"0xe68ef38cdf0bdfb83f811c6e1f489d35020dbac3f0905daef9a2b984dcd7ded4",
"0xb6a23795d8272c381f2b588b437526843a51f9f75d98a64be6548609f4f2b72b",
"0xc581f17c4cfbf0f8c94d29219267a900b02d8e2706eb66f4945ce4511cd8c054",
"0x2ae0bd38ca0e549282e91ce870f1a908500441f118913c2beed2c67a48ded25b",
"0x297040a0c135e91dd760120854fbe233ee5eebf68a94ee65afac47280729244c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


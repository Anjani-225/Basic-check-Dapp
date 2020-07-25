var contractABI = [];
var contractAddress = '0x0337B90e7d054207Ab495e53a3B06B4DB49Ac7e1';
var web3 = new Web3["http://127.0.0.1:9545/"];
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web.eth.getAccounts().then(console.log);
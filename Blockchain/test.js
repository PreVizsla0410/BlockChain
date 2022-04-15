const { Block } = require ('./block.class');
const { Blockchain } = require('./blockchain.class');

console.log('Creating blockchain');
let jChain = new Blockchain();
let block1 = new Block(Date.now(), {'Richard': 100, 'manu': 70}, );

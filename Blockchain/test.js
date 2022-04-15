const { Block } = require ('./block.class');
const { Blockchain } = require('./blockchain.class');

console.log('Creating blockchain');
let jChain = new Blockchain();
let block1 = new Block(Date.now(), {'Richard': 100, 'manu': 70}, );
jChain.adBlock(block1);

let block2 = new Block2;

block1.data = {'Richard': 100, 'manu': 50}; //Hier ist nur der Wert 50 geändert worden, wie bei den anderen Unit Tests

console.log(jChain.chain);

console.log('Is Blockchain valid?', jChain.isValid());
console.log('Neuer Hash von block 1', block1.createHash());
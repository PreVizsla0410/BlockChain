const { Block } = require('./block.class');
const { Blockchain } = require('./blockchain.class');

console.log('Creating blockchain');
let jChain = new Blockchain();
let block1 = new Block(Date.now(), { 'junus': 100, 'manu': 50 });
jChain.addBlock(block1);

let block2 = new Block(Date.now(), { 'junus': 80, 'manu': 70 }); 
//Hier wird ein Block - je nach Dificulty - erstellt

jChain.addBlock(block2);

block1.data = { 'junus': 180, 'manu': 70 };

console.log(jChain.chain);

console.log('Is Blockchain valid?', jChain.isValid());
console.log('Neuer Hash von block 1', block1.createHash());

//Hier wird ein Block - je nach Dificulty - erstellt

// let block2 = new Block(Date.now(), {'Richard': 80, 'manu': 70}, );

// jChain.addBlock(block2);

// block1.data = {'Richard': 100, 'manu': 50}; //Hier ist nur der Wert 50 geändert worden, wie bei den anderen Unit Tests


// console.log('Is Blockchain valid?', jChain.isValid());
// console.log('Neuer Hash von block 1', block1.createHash());
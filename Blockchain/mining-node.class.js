// const DEFAULT_DATA = {transactions: [{ from: 'BlockReward', to: this.name, amount: 5}]};


class MiningNode {
    isMining = false;
    currentBlock; //Variable

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.blockData = {transactions: [{ from: 'BlockReward', to: this.name, amount: 5}]};
       renderCurrentTransactions(this.blockData.transactions);
        broadcaster.subscribe((nodeID) => {
            console.log('Nachricht empfangen', nodeID);
            if (nodeID !== this.id) {
                this.killCurrentBlock();
            }});
            newTransaction.subscribe( (transaction) => {
            this.blockData.transactions.push(transaction);
            });
    }
    toggle() {
        this.isMining = !this.isMining; //so schaltet man das Mining ein oder aus
        if(this.isMining) { //Wenn der Wert true ist, fangen wir an zu minenn
            this.mine();
        } else {
            this.killCurrentBlock(); //Wenn nicht, dann wird es abgebrochen
        }
    }
    killCurrentBlock() {
        if(this.currentBlock){
            this.currentBlock.kill = true;
        }
        this.blockData = {transactions: [{ from: 'BlockReward', to: this.name, amount: 5}]};
    }
    async mine() {
        renderCurrentTransactions(this.blockData.transactions);
        this.currentBlock = new Block(Date.now(), this.blockData);
        await blockchain.addBlock(this.currentBlock, this.id); //Viel CPU Auslastung! - add Block wird für eine Methode erfolgreich sein - für die andere nicht
        if(this.isMining) {
            this.mine();
        }
    }
}
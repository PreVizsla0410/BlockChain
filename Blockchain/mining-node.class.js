class MiningNode {
    isMining = false;
    constructor() {

    }
    toggle() {
        this.isMining = !this.isMining;
        if(this.isMining) {
            this.Mine();
        } else {
            this.killCurrentBlock();
        }
    }
    killCurrentBlock() {

    }
}
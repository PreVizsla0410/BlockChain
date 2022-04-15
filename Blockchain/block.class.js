//Blockchain ist eine DAtenbank und diese Daten werden in Blöcken gespeichert

class Block {
    constructor(time = Date.now(), data = {}) { //Date.now ist die aktuelle Zeit (in Millisekunden); - Klammern definieren wir einen Standartwert
        this.time = time;
        this.data = data; //data sind die Daten die da reingegeben werden
        this.lastHash = '';
        this.nonce = 0;
        this.difficulty = '0000'; //hier wird alles solange definiert, bis der Hashcode vier 0000 erreicht hat
    }

    createHash() { //hier ziehen wir den Hash Algorithmus aus der sha256 Datei heraus
        return sha256(this.nonce + this.time + this.data + JSON.stringify.this.data); //Wenn sich hier eine Variable ändert, ändert sich die gesamte Datei; Hier wird alles in eine JSON string geändert
    }
    mine() {
        let hash = this.createHash();//hier holen wir unseren Hash aus der Hashing Funktion 
        while(!hash.statsWith('00')) { //Hier lassen wir unsere Funktion so lange arbeiten, bis unser HashCode mit 00 beginnt
            this.nonce++; //Die erhöhung der Zahl wird hier definiert, also die Zahle wird immer wieder erhöht, also es wird solange gemacht, bis alles mit 00 beginnt
            hash = this.createHash(); //der Code wird solange generiert, solange unsere Funkton die richtigen Zahlen erreicht hat
        }
    }
}

//Das ist die Sache was Blockchains so sicher macht. Ändert man nur eine Variable, wird alles komplett nutzlos 
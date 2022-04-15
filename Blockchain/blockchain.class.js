class Blockchain { //Klasse wir beschreiben hier die Eigenschaft unserer Blockchain
    constructor() {//jede Klasse hat einen constructor
    this.chain = [];
    } 

    addBlock(block) { //Funktion
    block.lastHash = this.getLastBlock().createHash(); //hier greifen wir auf das letzte Hash zurück und kreieren dann eine neue - wird aus dem alten Hash was geändert, ist die neue auch nicht mehr die gleiche
    this.chain.push(Object.freeze(block)) //push da wird was zur Kette hinzugefügt - mit freeze wird das Objekt gesperrt und kann somit nie wieder geändert werden, nachdem was hinzugefügt wurde
    }

    isValid() {
        let invalidBlock = this.chain.find((currBlock, i) => { //hier werden alle Blöcken durchgesucht
        let prevBlock = this.chain [i - 1]; //hier wird i (index) mit dem vorherigen Index verglichen und so die Validität festgestellt
        return prevBlock && prevBlock.createHash() != currBlock.lastHash; //wenn hier nicht alles stimmt, dann hat wer die Blockchain verfälscht
        });
        if(invalidBlock) {
            return false; 
        }
                else { return true;
            }
        }
        //Hier wird sie validiert
    getLastBlock() {
        return this.chain[this.chain.length -1]; //hier sollte man uns die letzte Blockchain wiedergegeben werden, also immer den letzten Block; die Synchronisation der DB werden in Blöcken zusammengestückelt (gepuzzelt)
    //in jedem Block wird also die Zeit(Zeitstempel und die Date gespeichert)
    }
}

//der größte Vorteil von Blockchain: Vertrauen & Transparenz - keine Intrasparenz und politischer Missbrauch - stark gegenüber failed States (Venezuela)
//Nachteil: Sehr viele Daten und ineffizienz -ewiges Synchronisieren durch Millionen von Daten (Skalierung, Kosten, Datenstrom)
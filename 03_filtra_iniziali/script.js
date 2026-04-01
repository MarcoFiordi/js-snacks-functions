/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraPerLettera(arrayNomi, lettera) {
    const risultato = []
    for (let i = 0; i < arrayNomi.length; i++) {
        const nome = arrayNomi[i];
        const primaLettera = nome[0];
        if (primaLettera === lettera) {
            risultato.push(nome);
        }
        //console.log(nome, primaLettera, lettera);
        
    }
    return risultato;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(filtraPerLettera(names,'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
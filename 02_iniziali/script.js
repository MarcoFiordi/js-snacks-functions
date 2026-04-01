/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
function getIniziali(arrayNomi) {
    const iniziali = [];
    for (let i = 0; i < arrayNomi.length; i++){
        const nome = arrayNomi[i];
        const primaLettera = nome[0];
        iniziali.push(primaLettera);
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getIniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
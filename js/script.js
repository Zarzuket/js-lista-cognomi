// crea lista array con nomi
// chiedi all'utente il cognome e pushalo sull'array
// stampa la lista in ordine alfabetico
// posiziona umana (partendo da 1) 

var listaCognomi = ["Bianchi" , "Neri" , "Rossi" , "Verdi" , "Gialli"];

var cognomeUtente = prompt("Inserisci il tuo cognome");

cognomeUtente = cognomeUtente.toUpperCase() + cognomeUtente.substring(1);
listaCognomi.push(cognomeUtente);

// console.log(listaCognomi);


// console.log(listaCognomi.sort());
var listaCognomiUp = listaCognomi.sort();
console.log(listaCognomiUp)

console.log(listaCognomiUp.indexOf(cognomeUtente)+1);
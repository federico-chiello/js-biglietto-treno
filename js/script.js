// Calcolo del prezzo del biglietto del treno

// Viene chiesto all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// In base a questo, viene calcolato il prezzo totale del viaggio.

// variabili
var chilometri = parseFloat(prompt('Inserire il numero dei km da percorrere'));
var eta = parseInt(prompt('Inserire l\'età del passeggero'));
var prezzo = 0.21;
var prezzoBiglietto = prezzo * chilometri;
var sconto = prezzoBiglietto * 20 / 100;
var prezzoScontato = prezzoBiglietto - sconto;
var scontoOver = prezzoBiglietto * 40 / 100;
var prezzoScontatoOver = prezzoBiglietto - scontoOver;
var prezzoFinale;

// primo metodo
// if (eta < 18) {
//   prezzoFinale = prezzoScontato;
//   // console.log(prezzoScontato);
// } else if (eta >= 65) {
//   prezzoFinale = prezzoScontatoOver;
//   // console.log(prezzoScontatoOver);
// }
// else {
//   prezzoFinale = prezzoBiglietto;
//   // console.log(prezzoBiglietto);
// }

// secondo metodo
if (eta < 18) {
  prezzoBiglietto = prezzoScontato;
  // console.log(prezzoScontato);
} else if (eta >= 65) {
  prezzoBiglietto = prezzoScontatoOver;
  // console.log(prezzoScontatoOver);
}

document.getElementById('bigliettoTreno').innerHTML = prezzoBiglietto.toFixed(2) + ' ' + '€';

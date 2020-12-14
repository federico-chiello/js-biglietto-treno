// Calcolo del prezzo del biglietto del treno

// Viene chiesto all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// In base a questo, viene calcolato il prezzo totale del viaggio.

var chilometri = parseFloat(prompt('Inserire il numero dei km da percorrere'));

var eta = parseInt(prompt('Inserire l\'età del passeggero'));

var prezzo = parseFloat('0.21');

var prezzoBiglietto = prezzo * chilometri;

// console.log(prezzoBiglietto);

// document.getElementById('bigliettoTreno').innerHTML = prezzoBiglietto;

var eta;
var prezzoBiglietto;
var sconto = ((prezzoBiglietto * 20) / 100);
var prezzoScontato = prezzoBiglietto - sconto;
var prezzoFinale;
var scontoOver = ((prezzoBiglietto * 40) / 100);
var prezzoScontatoOver = prezzoBiglietto - scontoOver;

if (eta < 18) {
  prezzoFinale = prezzoScontato;
  // console.log(prezzoScontato);
} else if (eta >= 65) {
  prezzoFinale = prezzoScontatoOver;
  // console.log(prezzoScontatoOver);
} else if(eta >= 18){
  prezzoFinale = prezzoBiglietto;
  // console.log(prezzoBiglietto);
}

document.getElementById('sconto').innerHTML = Math.trunc(prezzoFinale) + ' ' + '€';

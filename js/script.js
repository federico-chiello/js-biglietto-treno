// Calcolo del prezzo del biglietto del treno

// Viene chiesto all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// In base a questo, viene calcolato il prezzo totale del viaggio.

var chilometri = parseFloat(prompt('Inserire il numero dei km da percorrere'));

var eta = parseInt(prompt('Inserire l\'età del passeggero'));

var prezzo = parseFloat('0.21');

var prezzoBiglietto = prezzo * chilometri;

// console.log(prezzoBiglietto);

// document.getElementById('bigliettoTreno').innerHTML = prezzoBiglietto;

var eta = 18
var operazione;

if (eta < 18) {
  operazione = [(prezzoBiglietto * 20) / 100];
  // console.log(operazione);
}

document.getElementById('minorenne').innerHTML = operazione;

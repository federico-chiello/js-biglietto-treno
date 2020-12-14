// Calcolo del prezzo del biglietto del treno

// Viene chiesto all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// In base a questo, viene calcolato il prezzo totale del viaggio.

var chilometri = parseFloat(prompt('Inserire il numero dei km da percorrere'));

var eta = parseInt(prompt('Inserire l\'età del passeggero'));

var prezzoBiglietto = parseFloat('0.21');

console.log(prezzoBiglietto * chilometri);

// document.getElementById('bigliettoTreno').innerHTML = prezzoBiglietto * chilometri;

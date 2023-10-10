// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65
const creation = document.querySelector(".btn-success");
const reset = document.querySelector(".btn-danger");

creation.addEventListener("click", function () {
  let name = document.getElementById("enterName").value;
  let secondName = document.getElementById("enterSecondName").value;
  let kilometers = parseInt(document.getElementById("enterDistance").value);
  let age = document.getElementById("selectDiscount").value;

  let baseTicketPrice = 0.21;
  let ticketPrice = baseTicketPrice * kilometers;

  //   VERIFICA INSERIMENTO DATI
  if (isNaN(kilometers) || age === "" || name === "" || secondName === "") {
    alert("Per favore riempire i campi come richiesto");
    window.location.reload();
  }

  if (age < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
    console.log(ticketPrice.toFixed(2));
  } else if (age >= 65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
    console.log(ticketPrice.toFixed(2));
  } else {
    ticketPrice = ticketPrice;
    console.log(ticketPrice.toFixed(2));
  }
});

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

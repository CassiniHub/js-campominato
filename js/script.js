// ES #1
// * Il computer deve generare 16 numeri casuali tra 1 e 100.
// * I numeri non possono essere duplicati.

// * In seguito deve chiedere all’utente (100 - 16) volte
// * di inserire un numero alla volta, sempre compreso tra 1 e 100.

// * L’utente non può inserire più volte lo stesso numero.

// * Se il numero è presente nella lista dei numeri generati,
// * la partita termina, altrimenti si continua
// * chiedendo all’utente un altro numero.

// * La partita termina quando il giocatore inserisce un numero “vietato”
// * o raggiunge il numero massimo possibile di numeri consentiti.

// * Al termine della partita il software deve comunicare il punteggio,
// * cioè il numero di volte che l’utente ha inserito un numero consentito.

// * BONUS: (da fare solo se funziona tutto il resto)
// * all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// * con difficoltà 0 => tra 1 e 100
// * con difficoltà 1 => tra 1 e 80
// * con difficoltà 2 => tra 1 e 50

function selectDifficulty(difficulty) {

   var difficulty = prompt("Seleziona un livello di difficoltà compresotra: 0, 1 o 2");
   var lvlDiff    = {

      levelDifficulty: difficulty,
      maxNumbers: 0,
   };
   
   if (difficulty == 0) {
      
      lvlDiff.maxNumbers = 100;
      return lvlDiff;
   } else if (difficulty == 1) {
   
      lvlDiff.maxNumbers = 80;
      return lvlDiff;
   } else if (difficulty == 2) {
      
      lvlDiff.maxNumbers = 50;
      return lvlDiff;
   } else {
      alert("Non hai selezionato la difficoltà");
   }
}

function pcRamdomNumbers(maxLng) {
   
   var pcNumbers = [];

   while (pcNumbers.length < maxLng) {
      
      var rndNumber = getRnd(1, lvlDiff.maxNumbers);

      if (pcNumbers.includes(rndNumber)) {
         
      } else {

         pcNumbers.push(rndNumber);
      }
   }

   return pcNumbers;
}

function userNumbers() {
   
   var userNumbers = [];
   var score       = 0;
   var userSummary = {
      score: score,
      userNumbers: userNumbers,
      explosionNumber: 0
   }

   while (userNumbers.length < (lvlDiff.maxNumbers - pcNumbers.length)) {
      
      var userNumber = parseInt(prompt("Inserisci un numero (Non puoi inserire più volte uno stesso numero):"));

      if (userNumbers.includes(userNumber)) {
         
      } else if (pcNumbers.includes(userNumber)) {

         userSummary.explosionNumber = userNumber;

         break
      } else {

         userNumbers.push(userNumber);
         userSummary.score++;
      }
   }

   return userSummary;
}


var lvlDiff     = Object.assign({}, selectDifficulty());
var pcNumbers   = pcRamdomNumbers(16);
var userSummary = userNumbers();

function campoMinato() {
   
   console.log("Partita terminata", "-", "Punteggio: " + userSummary.score, "-", "Explosion number: " + userSummary.explosionNumber);
}

campoMinato();

// function campoMinato() {

//    console.log(lvlDiff.maxNumbers);

//    var pcNumbers   = [];
//    var userNumbers = [];
//    var score       = 0;

//    while (pcNumbers.length < 16) {

//       var rndNumber = getRnd(1, maxNumbers);

//       if (pcNumbers.includes(rndNumber)) {
         
//       } else {

//          pcNumbers.push(rndNumber);
//       }  
//    }

//    console.log(pcNumbers);

//    while (userNumbers.length < (maxNumbers - 16)) {
      
//       var userNumber = parseInt(prompt("Inserisci un numero (Non puoi inserire più volte uno stesso numero):"));

//       if (userNumbers.includes(userNumber)) {
         
//       } else if (pcNumbers.includes(userNumber)) {
         
//          var explosionNumber = userNumber;

//          break
//       } else {

//          userNumbers.push(userNumber);
//          score++
//       }
//    }

//    console.log(userNumbers);
//    console.log("Partita terminata", "-", "Punteggio: " + score, "-", "Explosion number: " + explosionNumber);
// };

// campoMinato();

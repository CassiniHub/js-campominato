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

// usare switch default valore semplice
function selectDifficulty(difficulty) {

   var difficulty = parseInt(prompt("Seleziona un livello di difficoltà compreso tra: 0, 1 o 2"));
   var maxValue = 0;

   switch (difficulty) {
      case 0:

         maxValue = 100;
         break;
      case 1:

         maxValue = 80;
         break;
      case 2:

         maxValue = 50;
         break;
      default:

         console.log("Livello di difficoltà non valido. Difficoltà default selezionata: difficoltà 0.");
         difficulty = 0;
         maxValue = 100;
   }
   
   return maxValue;
}

function pcRamdomNumbers(maxArrLng, maxValueRnd) {
   
   var pcNumbers = [];

   while (pcNumbers.length < maxArrLng) {
      
      var rndNumber = getRnd(1, maxValueRnd);

      if (!pcNumbers.includes(rndNumber)) {

         pcNumbers.push(rndNumber);
      }
   }

   return pcNumbers;
}

function userNumbers(maxValue, arrCompareLng, arrCompareNumbers) {
   
   var userNumbers = [];
   var userSummary = {
      userNumbers: userNumbers,
      explosionNumber: 0
   }

   while (userNumbers.length < (maxValue - arrCompareLng)) {
      
      var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100 / 80 / 50, a seconda della difficoltà selezionata (Non puoi inserire più volte uno stesso numero):"));

      if (userNumbers.includes(userNumber) || userNumber > maxValue || userNumber < 1){

         console.log("Valore non valido");
         continue;
      }
      
      if (arrCompareNumbers.includes(userNumber)) {

         userSummary.explosionNumber = userNumber;

         break
      }

      userNumbers.push(userNumber);
   }

   return userSummary;
}


var funCampoMinato = function campoMinato() {

   var maxValue  = selectDifficulty();
   var pcNumbers = pcRamdomNumbers(16, maxValue);
   var summary   = userNumbers(maxValue, pcNumbers.length, pcNumbers);
   
   console.log("Array di numeri pc: " + pcNumbers, "Array di numeri del giocatore: " + summary.userNumbers);
   console.log("Partita terminata", "-", "Punteggio: " + summary.userNumbers.length, "-", "Explosion number: " + summary.explosionNumber);
};

document.getElementById("btn").addEventListener("click", funCampoMinato);

// campoMinato();


// ------------------------------------------------


// OLD VERSION - ONE FUNCTION VERSION
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

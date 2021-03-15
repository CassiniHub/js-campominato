// General functions
function getRnd(min, max) {
   var minRnd = min;
   var maxRnd = max - minRnd + 1;
   var rnd1   = Math.floor(Math.random() * maxRnd) + minRnd;
   return rnd1;
}
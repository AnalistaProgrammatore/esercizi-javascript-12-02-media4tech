/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
/*const readline = require('readline')

let num;
console.log("inserisci un numero cì");

num = parseInt(readline());*/

var num = 5;

var fatto = straFattoRiale(num);
console.log(fatto);
  

function straFattoRiale (x) {
    if (x <= 1) {
        return 1;
    }
    
    return x * straFattoRiale(x - 1);
}

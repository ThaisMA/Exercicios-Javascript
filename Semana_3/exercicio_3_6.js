const input = require("readline-sync");
let numero = input.question("digite o numero: ")
let total = 0

function multiplos(num){
    for (let i=1; i<=Number(numero); i++){
        total = i
        if(total%3 === 0 && total%5 === 0) {
            console.log("biscoito de banana")
        }else if(total%5 === 0){
            console.log("biscoito")
        }else if (total%3 === 0){
            console.log("banana")
        }else{
            console.log(total)
        }
    }
    return total
}

multiplos(numero)
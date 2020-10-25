const input = require("readline-sync");
let numero = input.question("digite o numero: ")
let soma = 0

function somatotal (num){
    for (let i=1; i<=Number(numero); i++){
        if(i%3 === 0 || i%5===0){
            soma+=i
        }
    }
    return soma
}

console.log("Total:" + somatotal(numero))

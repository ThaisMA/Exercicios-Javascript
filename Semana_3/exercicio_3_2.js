const input = require("readline-sync");
let numero = input.question("digite um numero: ")

function valor (num){
    let total = 0
    for (let i = 0; i <= num; i++){
        total += i
    }
    return total
}
console.log("A soma total é: " + valor(numero))
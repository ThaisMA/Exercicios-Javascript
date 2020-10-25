const input = require("readline-sync");
let inicio = input.question("digite o numero inicial: ")
let final = input.question("Digite o numero final: ")
let numero = 0

function regressivo (num,num1){
    for (let i = Number(inicio); i >=Number(final); i-=2){
        numero = i
        console.log(numero)
    }
}
regressivo(inicio,final)
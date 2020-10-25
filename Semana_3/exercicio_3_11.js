const input = require("readline-sync");
let numero1 = input.question("digite o numero 1: ")
let numero2 = input.question("digite o numero 2: ")
let operacao = input.question("digite a operacao: ")
let total = 0

function soma(num1,num2){
    total = num1 + num2
    console.log(total)
}

function sub(num1,num2){
    total = num1 - num2
    console.log(total)
}

function multi(num1,num2){
    total = num1 * num2
    console.log(total)
}

function div(num1,num2){
    total = num1 / num2
    console.log(total)
}
switch(operacao){
    case '+':
        soma(Number(numero1),Number(numero2))
        break
    case '-':
        sub(Number(numero1),Number(numero2))
        break
    case '*':
        multi(Number(numero1),Number(numero2))
        break
    case '/':
        div(Number(numero1),Number(numero2))
        break
    default:
        console.log("Isso não é uma operação válida")
   }

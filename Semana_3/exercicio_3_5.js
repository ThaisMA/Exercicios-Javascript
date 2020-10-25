const input = require("readline-sync");
let numero = input.question("digite o numero: ")

function imparoupar(num){
    for (let i = 0; i<= Number(numero); i++){
        if(i%2 === 0){
            console.log("o numero " + i + " eh par" + "\n")
        }else{
            console.log("o numero " + i + " eh impar" + "\n")
        }
    }
}
imparoupar(numero)
const input = require("readline-sync");
let numero = input.question("digite o numero: ")

function triangulo (num){
    for (let i=0; i<numero;i++){
        let asterisco = "*"
        for (let j=0;j<i;j++){
            asterisco+="*"
        }
        console.log(asterisco)    
    }
}
triangulo(numero)
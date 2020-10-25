const input = require("readline-sync");
let numero = input.question("digite o numero: ")

let asterisco = ''
let espaco = ''

function triangulo (num){
    for (let i=1; i<=numero;i++){
        for (let j=1;j<=numero-i;j++){
            espaco+=' '    
            }
        asterisco+='*'
        console.log(espaco+asterisco)
        espaco = ''    
    }
}
triangulo(numero)
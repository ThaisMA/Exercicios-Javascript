const input = require("readline-sync");
let nome = ''
let sair = ''
while(sair != "tchau"){
    nome = input.question("digite o seu nome: ")
    sair = input.question("para sair digite tchau: ")
    if (sair != "tchau"){
      console.log("Ola " + nome)
    }else{
        console.log("Tchau "+ nome)
        break
    } 
}
const input = require("readline-sync");
const teste = input.question("digite uma palavra: ")
let palavra = ''

function uppercase (word){

    for(let i = 0; i < teste.length; i++){
        palavra += teste.toUpperCase().substr(i,1) + " "
    }
    return palavra
}
console.log(uppercase(teste))
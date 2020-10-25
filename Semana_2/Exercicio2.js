const input = require("readline-sync");

const nota_1 = input.question("Digite a primeira nota: ")
const nota_2 = input.question("Digite a segunda nota: ")
const nota_3 = input.question("Digite a terceira nota: ")
const nota_4 = input.question("Digite a quarta nota: ")
const nota_5 = input.question("Digite a quinta nota: ")
const nota_6 = input.question("Digite a sexta nota: ")

const total = ((Number(nota_1) + Number(nota_2) + Number(nota_3) + Number(nota_4) + Number(nota_5) + Number(nota_6))/6)

if (total > 7){
    console.log("Passou de ano!"+ "\n" + "Nota final: " + total.toFixed(2))
}else if (total < 7 && total > 5 ){
    console.log("Ta de recuperação" + "\n" + "Nota final: " + total.toFixed(2))
}else{
    console.log("Reprovou"  + "\n" +  "Nota final: " + total.toFixed(2))
}
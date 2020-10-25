const input = require("readline-sync");
let numero = input.question("digite o numero 1: ")
let numero1 = input.question("digite o numero 2: ")
let numero2 = input.question("digite o numero 3: ")
let soma = 0

function somatotal (num,num1,num2){
    if ((num1 > 1 && num1 < 9) && (num2 > 1 && num2 < 9)){
        for (let i=1; i<=Number(num); i++){
            if(i%num1 === 0 || i%num2===0){
                soma+=i
            }
        }
        return soma
    }else{
        return ("informe múltiplos de 1 a 9")
        }
}
console.log(somatotal(numero,numero1,numero2))

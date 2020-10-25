# Exercícío semana 3

#### 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'


#### 2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 


#### 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
 - Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
 - O programa vai dizer `Tchau [nome]` e finalizar.


#### 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre eles, contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0.


#### 5) crie uma função que receba um número e imprima no console de 0 até o número informado. Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 é par", "5 é ímpar". 


#### 6) crie uma função que receba um número inteiro e imprima os números no console em ordem, de 1 até o número. Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, imprima "biscoito de banana". Exemplo, recebendo 15 o resultado será:
``` python
1
2
banana
4
biscoito
banana
7
8
banana
biscoito
11
banana
13
14
biscoito de banana
```

#### 7) crie uma função que receba um número positivo inteiro, itere de 1 ao número e some SOMENTE todos os números múltiplos de 3 OU 5. Por exemplo, recebendo 15, o valor retornado deverá ser 60, ou seja, a soma de todos os números múltiplos de 3 ou 5 entre 0 e 15 (3 + 5 + 6, etc).

#### 8) altere a função acima para, ao invés de somar múltiplos de 5 ou 3, fazer isso com qualquer número de 1 a 9. Os números serão recebidos via parâmetro de função, por exemplo: `function somaMultiplos(num, multiplo1, multiplo2)` pode ser chamada com os valores `somaMultiplos(100, 2, 4) e verificar os números múltiplos de 2 e 4. Extra: antes de seguir com o cálculo, verificar se os números recebidos estão mesmo entre 1 e 9; caso não estejam, imprimir o aviso "informe múltiplos de 1 a 9" e encerrar o programa.


#### 9) crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:
``` python
 *
 **
 ***
 ****
 *****
```

#### 10) refaça o exercício acima, porém agora com o seguinte padrão:
``` python
    *
   **
  ***
 ****
*****
```
#### 11) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

#### 12) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

#### 13) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

#### 14) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

#### 15) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

#### 16) Crie uma função com as seguintes características:
- A função deve receber 3 números
- Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
- O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  

#### 17) Crie uma função com as seguintes características:
- A função deve receber 3 parâmetros.
- Se somente um parâmetro for passado, retorne o valor do parâmetro.
- Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
- Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
- Se nenhum parâmetro for passado, retorne **"não recebeu parâmetro"**

#### 18) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

#### 19) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false.
```
Exemplo de palíndromo: "arara".
```

#### 20) Crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

#### 21) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
```
Exemplo:
potenciaDeDois(10) // 1024
```

#### 22) Crie uma função que receba três números e determine se um número é maior que outro.
```
Exemplo:
retornaNumMaior(10, 20, 30) // 30
```

#### 21) Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

#### 22) Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais.
``` 
Exemplo:
function contaVogais("carro") // 2 
```

#### 23) Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
```
Exemplo:
function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]
```
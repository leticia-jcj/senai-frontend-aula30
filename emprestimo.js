var readline = require("readline-sync") 

var valorEmprestimo = readline.question("Qual o valor do esmprestimo? ")
var tempo = readline.question("Em quantos meses vai pagar?")


/* formula M = C*(1 + i)^t
   m = valor final apos aplicar juros
   c = valor que a pessoa vai pegar emprestado
   i = taxa de juros
   t = o tempo
*/

var taxaJuros = 0.02
var emprestimoComJuros = valorEmprestimo * (1 + taxaJuros)**tempo
console.log("------------------------------------------------------")
console.log("Valor do empréstimo: R$" + valorEmprestimo)
console.log("Empréstimo a ser pago em " + tempo + " meses.")
console.log("Valor final do emprestimo com acréscimo de juros: R$" + emprestimoComJuros.toPrecision(5))

var readline = require("readline-sync") 

var nome = readline.question("Qual seu nome? ")
var n1 = readline.questionFloat("Informe um número: ")
var n2 = readline.questionFloat("Informe outro número: ")
var soma = n1 + n2

console.log("Seu nome e: " + nome)
console.log("A soma dos números " + n1 + " e " + n2 + " é '"+soma +"'")
console.log(`A soma os números ${n1} e ${n2} é '${soma}'`)

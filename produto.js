var readline = require("readline-sync") 

var nomeProduto = readline.question("Nome do produto: ")
var precoCusto = readline.questionFloat("Preço de custo: ")

var aumento = 0.65

var precoVenda = precoCusto + (precoCusto * aumento)

console.log("Produto: " + nomeProduto)
console.log("Preço de custo: " + precoCusto)
console.log("Preço de venda: " + precoVenda)


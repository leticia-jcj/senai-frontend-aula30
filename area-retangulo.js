var readline = require("readline-sync") 

var base = readline.questionFloat("Digite a base do retângulo: ")
var altura = readline.questionFloat("Preço de custo: ")

var area = (base*altura)/2
var perimetro = (base + altura)*2

console.log("Área do retângulo: " + area)
console.log("Perímetro do retângulo: " + perimetro)

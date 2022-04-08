//Crie um programa que me diga quanto cobrar para vender um notebook usado: 
// o seu custo foi de R$3000, por quanto devo vendê-lo descontando 25%?

let custoPC = 3000
let desconto = (25/100)*3000
let vendaPcUsado = custoPC - desconto

console.log(`O notebook usado deve ser vendido por R$ ${vendaPcUsado}.`)
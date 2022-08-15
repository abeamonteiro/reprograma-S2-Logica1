// Escreva um programa que recebe uma altura em metros e peso em kg e cálculo o IMC.
// fórmula IMC = peso/(altura x altura)

let valorAltura = 1.74 
let valorPesoKg = 65.4
const IMC= valorPesoKg / Math.pow(valorAltura,2)

console.log(`O resultado do IMC é ${IMC .toFixed(2)} .`)

// const IMC= valorPesoKg / (valorAltura * valorAltura)

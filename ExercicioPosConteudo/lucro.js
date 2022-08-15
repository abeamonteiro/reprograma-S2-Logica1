//Crie um programa que me diga como lucrar nesta situação: 
//quero vender uma bicicleta que 60% do seu valor é R$300, 
//por quanto devo vendê-la para lucrar 25%?


//60% = R$ 300
//100% = x

let SessentaPorCento = 300
let CemPorCento = (300*100)/60
console.log (CemPorCento)

let VinteECincoPorCento = CemPorCento*(25/100)
console.log (VinteECincoPorCento)

let VendaComLucro = CemPorCento + VinteECincoPorCento

console.log(`Para obter 25% de lucro na venda da bicicleta, ela deve ser vendida por R$${VendaComLucro} reais. :) `)
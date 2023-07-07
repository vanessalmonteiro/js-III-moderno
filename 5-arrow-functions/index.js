// Função normal

function normalSoma(a, b) {
    return a + b
}

console.log(`Soma normal: ${normalSoma(2, 2)}`)


// Função anônima

const somaAnonima = function (a, b) {
    return a + b
}

console.log(`Soma anônima: ${somaAnonima(2, 2)}`)


// Arrow Function

const arrowFunctionSoma = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowFunctionSoma(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)

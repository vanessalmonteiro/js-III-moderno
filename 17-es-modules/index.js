// Vamos imaginar que na nossa aplicação temos um arquivo javascript com várias funções e que utilizamos essas funções várias vezes:

//Sem divisão de módulos

// function label(attributes) {
//     const element = document.createElement('label')
//     Object.assign(element, attributes)
//     return element
// }

// function input(attributes) {
//     const element = documente.createElement('input')
//     Object.assign(element, attributes)
//     return element
// }

// function br() {
//     const element = document.createElement('br')
//     return element
// }

// console.log(label({for: 'fullname', textContent: 'Nome Completo'}))

// console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))

// console.log(br())



// Com divisão de módulos

import { label, input, br } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))

console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completos...'}))

console.log(br())

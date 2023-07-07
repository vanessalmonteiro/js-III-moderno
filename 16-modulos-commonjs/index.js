// Vamos imaginar que nós temos uma aplicação que possui várias funcionalidades diferentes, como ilustrado pelo código abaixo:

// CÓDIGO SEM DIVISÃO DE MÓDULOS

// function render() {
//     console.log("Renderizando a interface da aplicação...")
// }

// function store() {
//     console.log("Salvando as informações no banco de dados...")
// }

// console.log("Aplicação iniciada.")
// render()
// store()
// console.log("Aplicação finalizada.")


// CÓDIGO COM DIVISÃO DE MÓDULOS
const render = require("./render")
const store = require("./store")

console.log("Aplicação iniciada.")

render()
store()

console.log("Aplicação finalizada.")


// precisa do node.js para funcionar
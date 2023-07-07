// Vamos modularizar nosso código javascript utilizando os ES Modules:

// ES MODULES É A DIVISÃO DE MÓDULOS NATIVA DO JS
export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
}

export function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

export function br() {
    const element = document.createElement('br')
    return element
}
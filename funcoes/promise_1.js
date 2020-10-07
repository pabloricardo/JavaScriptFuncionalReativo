let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 6
    })
})

p.then(valor => console.log(valor))
p.then(valor => console.log(valor.y))



let w = new Promise((resolve) => {
    resolve(["Ana", "Bia", "Carlos", "Daniel"])
})

w
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => console.log(letra))



let o = new Promise((cumprirPromessa) => {
    cumprirPromessa(["Matheus", "Pedro", "Juliana", "Bia"])
})

const primeiroElemento = arrayOuString => arrayOuString[0]

o
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(console.log)
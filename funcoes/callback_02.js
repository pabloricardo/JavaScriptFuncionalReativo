const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirCoteudo(_, conteudo){
    console.log(conteudo.toString())
}

console.log("Início")
fs.readFile(caminho, exibirCoteudo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))
console.log("Fim")

console.log("Inicio Sync...")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim Sync...")
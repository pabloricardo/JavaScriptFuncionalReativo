const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }

    })
}

function lerArquivo(caminho){
    return new Promise((resolve,reject) => {
        try {
            const conteudo = fs.readFileSync(caminho)
            resolve(conteudo.toString())            
        } catch (error) {
            reject(error)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual, array){
    return array.filter( elemento => elemento.endsWith(padraoTextual))
}

function removerElementosSeIncluir(padraoTextual, array){
    return array.filter(el => !el.includes(padraoTextual))
}

function removerElementosSeVazio(array){
    return array.filter(el => el.trim())
}

function removerElementosSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos, array){
    return array.map(el => {
        let textSemSimbolos = el
        simbolos.forEach(simbolo => {
            textSemSimbolos = textSemSimbolos.split(simbolo).join('')
        })
        return textSemSimbolos
    })

}

function mesclarElementos(array){
   return array.join(' ')
}

function separarPor(simbolo) {
    return function(texto){
        return texto.split(simbolo)
    }
}
module.exports = {
    lerDiretorio,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarPor
}
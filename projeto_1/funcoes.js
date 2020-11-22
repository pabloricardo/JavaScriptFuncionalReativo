const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(arquivo => {
               return path.join(caminho, arquivo)
            })
            resolve(arquivosCompletos)
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
        return simbolos.reduce((acc, simbolo) => {
            return acc.split(simbolo).join('')
        }, el)
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

function agruparElementos(palavras){
    return Object.values(palavras.reduce((acc, palavra)=>{
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = {elemento: el, qtde}
        return acc
    },{}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc'){
    return function(array){
        const desc = (o1,o2) => o2[attr] - o1[attr]
        const asc = (o1,o2) => o1[attr] - o2[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
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
    separarPor,
    agruparElementos,
    ordenarPorAtribNumerico
}
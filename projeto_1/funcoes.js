const fs = require('fs')
const { resolve } = require('path')
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

function elementosTerminadosCom(array, padrao){
    return array.filter( elemento => elemento.endsWith(padrao))
}

module.exports = {
    lerDiretorio,
    lerArquivos,
    elementosTerminadosCom
}
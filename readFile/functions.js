const fs = require('fs')
const path = require('path')

function lerDados(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivo = fs.readdirSync(caminho)
            arquivo = path.join(caminho, arquivo.toString())
            let dados = fs.readFileSync(arquivo)
            resolve(dados.toString())
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { lerDados }
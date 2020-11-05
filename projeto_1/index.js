const path = require('path')
const { removerElementosSeVazio } = require('./funcoes')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')'
]

function agruparPalavras(palavras){
    return palavras.reduce((agrupamento, palavra)=>{
        const p = palavra.toLowerCase()
        if(agrupamento[p]){
            agrupamento[p] += 1
        }else{
            agrupamento[p] = 1
        }
        return agrupamento
    },{})
}

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom('.srt', arquivos))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarPor('\n'))
    .then(fn.removerElementosSeVazio)
    .then(linhas => fn.removerElementosSeIncluir('-->', linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(arquivo => fn.removerSimbolos(simbolos, arquivo))
    .then(fn.mesclarElementos)
    .then(fn.separarPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)
    .then(agruparPalavras)
    .then(console.log)


const { SSL_OP_NO_TLSv1_1 } = require('constants')
const path = require('path')
const { removerElementosSeVazio } = require('./funcoes')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')'
]


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
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
    .then(console.log)


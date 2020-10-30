const path = require('path')
const { removerElementosSeVazio } = require('./funcoes')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')'
]

const mesclarElementos = array => array.join(' ')
const separarPorLinha = todoConteudo => todoConteudo.split('\n')
const separarPorPalaras = todoConteudo => todoConteudo.split(' ')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom('.srt', arquivos))
    .then(fn.lerArquivos)
    .then(mesclarElementos)
    .then(separarPorLinha)
    .then(fn.removerElementosSeVazio)
    .then(linhas => fn.removerElementosSeIncluir('-->', linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(arquivo => fn.removerSimbolos(simbolos, arquivo))
    .then(mesclarElementos)
    .then(separarPorPalaras)
    .then(fn.removerElementosSeVazio)
    .then(console.log)


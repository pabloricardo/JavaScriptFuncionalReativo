const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>',
    '</i>', '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom('.srt', arquivos))
    .then(fn.lerArquivos)
    .then(conteudos => conteudos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(fn.removerElementosSeVazio)
    .then(linhas => fn.removerElementosSeIncluir('-->', linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(arquivo => fn.removerSimbolos(simbolos, arquivo))
    .then(console.log)


const fn = require('./functions')
const path = require('path')

const caminho = path.join(__dirname,'dados')

fn.lerDados(caminho)
    .then(console.log)
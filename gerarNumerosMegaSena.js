const { resolve } = require("path")

function gerarNumero(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        let fator = max - min + 1;
        const numero = parseInt(Math.random() * fator) + min;
        resolve(numero);
    })
}


function numeroMegaSena(){
    return Promise.all([
        gerarNumero(1,60),
        gerarNumero(1,60),
        gerarNumero(1,60),
        gerarNumero(1,60),
        gerarNumero(1,60),
        gerarNumero(1,60),
    ])
}


numeroMegaSena().then(console.log)
// gerarNumero(10,11).then(console.log)




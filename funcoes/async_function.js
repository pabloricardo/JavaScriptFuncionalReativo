async function somar(a, b){
    return a + b
}

console.log(somar(2,4));//print promise because somar return promise resolved

somar(2,7).then(console.log);
function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
//     .then(esperarPor)
    

async function executar(){
    await esperarPor();
    console.log('Async/Aswait 1...')
    await esperarPor();
    console.log('Async/Aswait 2...')
    await esperarPor();
    console.log('Async/Aswait 3...')
}

executar()
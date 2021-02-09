const { promises } = require("fs");
const { resolve } = require("path");

async function esperarPor(tempo = 2000) {
    return new Promise(resolve =>
        setTimeout(
            resolve, tempo
        )
    )
}

async function executar() {
    console.log("Async/Await 01");
    await esperarPor(1500);
    console.log("Async/Await 02");
    await esperarPor(1000);
    console.log("Async/Await 03");
    await esperarPor();
}

executar();
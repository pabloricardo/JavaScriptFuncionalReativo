let funcionarOuNao = (message, probabilidade) => {
    return new Promise((resolve, reject) => {
        try {
            //con.log()
            if (Math.random() < probabilidade) {
                console.log(Math.random())
                reject(`Erro ao executar`)
            }
            else{
                console.log(Math.random())
                resolve(message)
            }
        } catch (e) {
            reject(e)
        }
    })
}


funcionarOuNao("Teste", 0.6)
    .then(v => `Valor ${v}`)
    .then(console.log)
    .catch(valor => console.log(`Erro geral: ${valor}`))
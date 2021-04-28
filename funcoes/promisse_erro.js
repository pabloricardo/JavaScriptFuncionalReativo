let promiseErrada = Promise.resolve(new Error("Deu Erro"))
promiseErrada.then(value => console.log(value))
.catch(reason => console.log("falhou: " + reason))

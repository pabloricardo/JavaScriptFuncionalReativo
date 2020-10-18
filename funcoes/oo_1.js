class Produto {
    
    constructor(nome, preco, desc = 0.2){
        this.nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

}

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
// p1.nome = 'canetaa'
// console.log(p1.nome)

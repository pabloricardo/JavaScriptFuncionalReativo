const num = [1, 2, 3, 4, 5]
const dobro = n => n * 2;
console.log(num.map(dobro))

const nome = ['João', 'Ana', 'Vanessa', 'Arthur']
const primeiraLetra = nome => nome[0]
const letras = nome.map(primeiraLetra)
console.log(nome, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome;
const nomes = carrinho.map(getNome);
console.log(nomes)

const totais = item => item.qtde * item.preco;
console.log(carrinho.map(totais))

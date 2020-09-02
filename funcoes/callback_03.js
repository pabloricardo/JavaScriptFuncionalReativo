const num = [1,2,3,4,5]
const dobro = n => n * 2;
console.log(num.map(dobro))

const nome = ['João', 'Ana', 'Vanessa', 'Arthur']
const primeiraLetra = nome => nome[0]
const letras = nome.map(primeiraLetra)
console.log(nome, letras)
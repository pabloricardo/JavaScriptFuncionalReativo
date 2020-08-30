//arrow function
const feriado = () => console.log("Feriado");
feriado();

const saudacao = nome => `Saudação ${nome} tudo bem?`
console.log(saudacao("Joãozinho"));



const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0;
    numeros.forEach(element => {
        total += element;
    });
    console.log(total);
}

somar(1,2,3);
somar(5,2,9,11)




const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(8))
function bomDia() {
    console.log("Bom dia!");
}

function boaNoite() {
    console.log("Boa noite!");
}

//Passar uma função como param para outra função
function executaFunction(fn) {
    if (typeof (fn) === "function") {
        fn();
    }
    else {
        console.log("Não é uma função");
    }
}

executaFunction(bomDia);
executaFunction(boaNoite);
executaFunction(3);

//Retornar um função a partir de uma outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potencia2 = potencia(2)
console.log(potencia2(8))

const potencia34 = potencia(3)(4)
console.log(potencia34)
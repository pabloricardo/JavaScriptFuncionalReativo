//somar (3) (4) (5)

function somar(n1){
    return function(n2){
        return function(n3){
            return n1+n2+n3;
        }
    }
}

let somarABC = somar(3)(4)(5);
console.log(somarABC);

//fn -> 3 * 7
//fn -> 3 + 7
//calcular (3) (7) (fn)

function calculaFn(a){
    return function(b){
        return function(fn){
            return fn(a,b);
        }
    }
}


function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

let sub = calculaFn(13) (7) (subtrair);
let mult = calculaFn(3) (7) (multiplicar);

console.log(sub);
console.log(mult);
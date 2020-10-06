function operation(n1){
    return function(n2){
        return function(n3){
            return n1 + n2 + n3;
        }
    }
}
console.log(operation(5)(7)(3));


function calcular(n1){
    return function(n2){
            return function(fn){
                return fn(n1,n2)        
            }
    }
}

function somar(n1,n2){return n1 + n2};
function subtrair(n1,n2){return n1 - n2};
function multiplicar(n1,n2){return n1 * n2};

console.log(calcular(20)(5)(somar));
console.log(calcular(20)(5)(subtrair));
console.log(calcular(20)(5)(multiplicar));
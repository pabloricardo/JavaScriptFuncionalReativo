
function exec (fn,a,b){
    return fn(a,b)
}

const somar = (a,b) => console.log(a+b)
const subtrair = (a,b) => console.log(a-b)

exec(somar, 10, 9)
exec(subtrair, 21, 9)


// setInterval(function (){
//     console.log("SetInterval...")
// }, 2000);
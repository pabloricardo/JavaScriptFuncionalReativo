//Function Declaration
function  getHour() {
   let hour = new Date().getHours();
   console.log(hour);
}

getHour();

//Function expression
const printText = function print(text){
   console.log(text)
}

printText("Oi eu sou Goku");


const somar = (a,b) =>{
   return a + b;
}

console.log(somar(10,9))
console.log(somar(1,2,5,6))
console.log(somar(1))
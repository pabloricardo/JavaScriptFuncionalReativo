function somarComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function() {
            resolve(a+b)
        }, 2000);
    })
}

async function resSoma(a,b,c){
    let x = await somarComDelay(a,b);
    //let x = somarComDelay(a,b);
    let y = c;
    
    return x + y;
}

resSoma(2,7,11).then(value => console.log(value))
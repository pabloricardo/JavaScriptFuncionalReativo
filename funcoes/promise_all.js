const p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(10)
    }, 3000);
})

const p2 = Promise.resolve(5)

const p3 = new Promise((resolve, reject) => resolve(9))

Promise.all([p1,p2,p3]).then(console.log(values))
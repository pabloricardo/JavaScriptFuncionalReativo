
const p1 = Promise.resolve(5);

const p2 = new Promise((resolve,reject) =>{
    resolve(2)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3)
    },3000)
})

Promise.all([p1,p2,p3]).then(values => console.log(values))
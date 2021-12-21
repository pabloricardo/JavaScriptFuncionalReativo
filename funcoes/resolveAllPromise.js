const p1 = Promise.resolve(3);

const p2 = new Promise(resolve => resolve(5));

const p3 = new Promise(resolve => {
    setTimeout(() => {
        resolve(7)
    }, 2000);
})

const p4 = function promise3(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(11)
        }, 1000);
    })
}

Promise.all([p1,p2,p3,p4()]).then(value => console.log(value))
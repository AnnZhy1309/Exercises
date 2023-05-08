const isLogged = true;
let number = Math.random;

function firstPromise(isLogged){
    return new Promise((resolve, reject)=>{
        if (isLogged == true){
            resolve (number);
        }else{
            reject (new Error("not a number"))
        }
    })
} 

function secondPromise (number){
    return new Promise((resolve, reject)=>{
        if (number>0.5){
            resolve ({name: "John", age: 24})
        }else{
            reject (new Error("wrong number"))
        }
    })
}

firstPromise()
.then (secondPromise)
.then ((val)=> console.log(val))
.catch ((err)=>console.error(err))
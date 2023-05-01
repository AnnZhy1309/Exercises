function sum (...rest){
    return rest.reduce((a,b)=>a+b);
}
console.log(sum(1, 3, 5, 6));

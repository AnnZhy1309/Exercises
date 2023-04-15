let data = [34, 7, 27823, 787];

function isPrime(num){
    if (num==2 || num==3) return true;
    if (num <=1|| num %2 ==0 || num%3==0) return false;
    for (let i=5; i*i<=5; i+=6)
    if (num % i == 0|| num % (i + 2)==0) return false;
    return true; 
}

function onlyPrimes(arr){
    return arr.filter ((el)=> isPrime(el));
}
let primes=onlyPrimes(data);
console.log(primes);

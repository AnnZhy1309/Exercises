function repeatHello(callback){
    setTimeout(()=>clearInterval(), 5000)
    console.log("Hello!");
}
setTimeout (repeatHello, 1000);

function printAsyncName("some"){

    let id = setInterval(callback, 1000);
    setTimeout(() => clearInterval(), 1000);
    console.log("some");
};
printAsyncName(()=> console.log("hello"));
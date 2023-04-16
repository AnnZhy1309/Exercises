function multiplyByTwo(value) {
    let number = 2;
    function inner(multiplyByTwo){
      return value*number;
    }
    return inner();
  }

  console.log(multiplyByTwo(4));
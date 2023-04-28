function sumUntil(maxValue) {
    let sum = 0;
    for (i=0; i<=maxValue; i++){
      sum+=i;
    }
    return sum;
  }
  let maxValue = 5;
  console.log(sumUntil(5));
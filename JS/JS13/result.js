function calculateAverageAge(persons) {
    const theAge = persons.map ((el)=> el.age);
    let totalAge = theAge.reduce((a, b)=> a+b);
    return totalAge/persons.length;
}

  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];

  //const theAge = persons.map ((el)=> el.age);
  
  //let average = theAge => theAge.reduce((a, b)=> a+b)/persons.length;

  //console.log(average);

  
  const average = calculateAverageAge(persons);
  console.log(persons);
  console.log(average);

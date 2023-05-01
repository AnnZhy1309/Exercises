const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    toJSON(){
      let toj = {id: 1, age: 25}
    return toj;
    }
  };
  
  const json = JSON.stringify(person);
  
  console.log(json); // Should return: { id: 1, age: 25 }


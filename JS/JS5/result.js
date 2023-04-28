const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  let person2 = person1;

  person2.firstName = "Simon";
  
  // Modify the property `firstName` of the `person2` in "Simon".
  
  console.log(person1);
  console.log(person2);
  
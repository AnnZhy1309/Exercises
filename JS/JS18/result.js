class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
    static fromObject(firstName, lastName){
      let obj = new Person;
    }
  };
  
  const obj = {
    firstName: "Mario",
    lastName: "Rossi",
  };
  
  const person = Person.fromObject(obj);
  console.log(obj._firstName + " " + obj._lastName);
  
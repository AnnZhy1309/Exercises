class Person {
  constructor (firstName, lastName,age){
    this.thefirstName = firstName;
    this.thelastName = lastName;
    this.theage = age;
  }
  set age(years){
    if(years<1){
      this.theage = 1;
    }else if (years>110){
      this.theage = 110;
    }else{
      this.theage = years;
    }
  }
  get age(){
    return this.theage;
  }

  set firstName(fn){
    if (fn === ''){
       console.log("Enter a first name");
    }
    this.firstName = fn;
  }
  get firstName(){
    return this.thefirstName;
  }
  set lastName(ln){
    if (fn === ''){
       console.log("Enter a last name");
    }
    this.lastName = ln;
  }
  get lastName(){
    return this.thelastName;
  }

  get fullName(){
    let fullname = this.firstName + this.lastName;
    return fullname;
  }

  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.thefirstName = 'Maria';
  person.thelastName = 'Verdi';
  console.log(person.fullName);
  
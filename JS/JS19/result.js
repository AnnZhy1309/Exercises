class Person {
    constructor (firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
      set firstName(nn){
        if (nn.length<1){
          console.log("Enter a valid name");
        }
        this._firstName = nn;
      }
  
      set lastName(nl){
        if (nl.length<1){
          console.log("Enter a valid name");
        }
        this._lastName = nl;
      }
  
      set age(na){
        if (na<1){
          this._age = 1
        }else if (na>100){
          this._age = 100;
        }else{
          this._age = na;
        }
      }
    
      get firstName(){
        return this._firstName
      };
      get lastName(){
        return this._lastName
      };
      get age(){
        return this._age
      };
  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName);
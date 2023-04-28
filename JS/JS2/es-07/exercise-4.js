
function (nicknameMap){


  return nicknames;
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

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);

let arr =[16, 17, 21, 32, 18, 13, 24, 15, 34, 28];






function nicknameMap(persons) {
  let name =["Paul", "George", "Lucas", "Marco", "Peter", "Carl", "Simon", "Mark", "Sandra", "Alice"];
  let age =[16, 17, 21, 32, 18, 13, 24, 15, 34, 28];
  for (let i=0; i<name.length; i++){
    console.log(name[i]);
  }
  for (let i=0; i<age.length; i++){
    console.log(age[i]);
  }
  }
  
  
  
  
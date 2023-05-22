const user = {
  id: 1,
  name: "John",
  age: 25,
};

function save(){
  localStorage.setItem(DATA_USER_LOCALSTOREGE, JSON.stringify(user));
}

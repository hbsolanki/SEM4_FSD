//Write JSON obj which Contain Array Of Threee Obj each obj contain two pro name,age now sort array value by age in dec order print name in the terminal

let obj = [
  {
    name: "ABC",
    age: 25,
  },
  {
    name: "ABC",
    age: 20,
  },
  {
    name: "PQR",
    age: 19,
  },
  {
    name: "XYZ",
    age: 21,
  },
  {
    name: "XYZ",
    age: 1,
  },
];

for (let i = 0; i < obj.length; i++) {
  for (let j = i; j < obj.length; j++) {
    if (obj[i].age < obj[j].age) {
      let tempA = obj[i].age;
      let tempN = obj[i].name;
      obj[i].age = obj[j].age;
      obj[i].name = obj[j].name;
      obj[j].age = tempA;
      obj[j].name = tempN;
    }
  }
}
console.log(obj);

obj.sort((a, b) => {
  b.age - a.age;
});

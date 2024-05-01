//write JSON Obj which Contain ArrayOf Three OBJ each contain two pro name,height print hight height with name

let obj = [
  {
    name: "ABC",
    height: 180,
  },
  {
    name: "AC",
    height: 190,
  },
  {
    name: "PQR",
    height: 150,
  },
  {
    name: "XYZ",
    height: 160,
  },
  {
    name: "XYZ",
    height: 165,
  },
];

let tempH = 0;
let tempN;

for (let i = 0; i < obj.length; i++) {
  if (obj[i].height > tempH) {
    console.log(obj[i].height);
    tempH = obj[i].height;
    tempN = obj[i].name;
  }
}

console.log("Name : " + tempN + " Height : " + tempH);

let test = {
  div1: {
    name: ["A", "X", "B"],
  },
  div2: {
    name: ["Y", "C", "Z"],
  },
};
arr = [];
for (i in test.div1.name) {
  arr.push(test.div1.name[i]);
}
for (i in test.div2.name) {
  arr.push(test.div2.name[i]);
}
arr = arr.sort();
for (i in arr) {
  console.log(arr[i] + " ");
}

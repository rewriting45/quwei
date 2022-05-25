var arr = [
  {
    id: 1,
    name: "candy",
    value: 40,
  },
  {
    id: 2,
    name: "Simon",
    value: 50,
  },
  {
    id: 3,
    name: "Tony",
    value: 45,
  },
  {
    id: 4,
    name: "Annie",
    value: 60,
  },
];

for(let i = 0 ; i < arr.length ; i ++) {
  for(let j = 0 ; j < arr.length - i - 1; j ++) {
    if (arr[j].value > arr[j+1].value) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
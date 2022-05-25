var arr = [
  [10, 14],
  [16, 60],
  [7, 44],
  [26, 35],
  [22, 63],
];

for(let i = 0 ; i < arr.length ; i ++) {
  for(let j = 0 ; j < arr.length - i - 1; j ++) {
    if (arr[j][1] < arr[j+1][1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
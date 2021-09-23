const fs = require("fs");
let [_, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");
arr = arr.map((el) => el.split(" ").map((el) => +el));

arr = arr.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
console.log(arr);
if (arr.length === Number(_)) {
  const res = arr.reduce((acc, cur) => {
    return acc + cur[1];
  }, 0);
  console.log(res);
} else {
  let startDeadline = 1;
  let amountOfRamyeon = 0;
  let tmp = arr[0][1];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][0] >= startDeadline) {
      if (tmp > arr[i][1]) {
        amountOfRamyeon += tmp;
        tmp = arr[i][1];
      } else if (tmp < arr[i][1]) {
        amountOfRamyeon += arr[i][1];
        tmp = arr[i + 1][1];
      }
      startDeadline += 1;
    }
  }
  amountOfRamyeon += tmp;
  console.log(amountOfRamyeon);
}

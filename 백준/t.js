const fs = require("fs");
let [z, ...arr] = fs.readFileSync("./data").toString().trim().split("\n");
const arrSize = [];
const data = [];
const res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length < 2) {
    arrSize.push(+arr[i]);
  } else {
    const tmp = arr[i].split(" ").map((el) => +el);
    data.push(tmp);
  }
}
for (let i = 0; i < arrSize.length; i += 1) {
  let nowArr;
  if (i === 0) {
    nowArr = data.slice(0, arrSize[i]);
  } else {
    nowArr = data.slice(arrSize[i - 1], arrSize[i - 1] + arrSize[i]);
  }
  nowArr = nowArr.sort((a, b) => a[0] - b[0]);
  let std = nowArr[0][1];
  let tmp = 1;
  for (const el of nowArr) {
    if (el[1] < std) {
      tmp += 1;
      std = el[1];
    }
  }
  res.push(tmp);
}
for (const a of res) {
  console.log(a);
}

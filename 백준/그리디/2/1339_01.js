const fs = require("fs");
let [_, ...arr] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const data = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i].length - 1; j >= 0; j -= 1) {
    const chr = arr[i][j];
    const tmp = data.find((el) => el[0] === chr);
    if (!tmp) {
      data.push([chr, 10 ** (arr[i].length - j)]);
      continue;
    }
    tmp[1] += 10 ** (arr[i].length - j);
  }
}

data.sort((a, b) => b[1] - a[1]);
const alpha = {};
let number = 9;
for (const a of data) {
  alpha[a[0]] = String(number);
  number -= 1;
}
const res = [];
for (let i = 0; i < arr.length; i++) {
  let tmp = "";
  for (let j = 0; j < arr[i].length; j++) {
    tmp += alpha[arr[i][j]];
  }
  res.push(Number(tmp));
}
const result = res.reduce((acc, cur) => acc + cur);
console.log(result);

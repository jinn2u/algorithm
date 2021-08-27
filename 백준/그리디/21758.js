const fs = require("fs");
const [N, M] = fs.readFileSync("./data").toString().split("\n");
const list = M.split(" ").map((el) => +el);

let sum = 0;
let big = 0;
sum = list.reduce((acc, cur) => acc + cur, 0) * 2;
let tmp1 = sum - list[0];
for (let i = 1; i < list.length; i++) {
  let tmp = tmp1;
  for (let j = 0; j <= i; j++) {
    tmp -= list[j];
  }
  tmp -= list[i];
  big = Math.max(big, tmp);
}
let tmp2 = sum - list[list.length - 1];
for (let i = list.length - 2; i >= 1; i--) {
  let tmp = tmp2;
  for (let j = list.length - 1; j >= i; j--) {
    tmp -= list[j];
  }
  tmp -= list[i];
  big = Math.max(big, tmp);
}
let tmp3 = sum / 2 - list[0] - list[list.length - 1];
for (let i = 1; i < list.length - 1; i++) {
  let tmp = tmp3;
  tmp += list[i];
  big = Math.max(big, tmp);
}
console.log(big);

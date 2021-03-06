// 동전의 최솟값을 구하는게 문제이다.
// 따라서 가장 큰 수부터 그리디하게 풀면 된다.
const fs = require("fs");
let [N, ...arr] = fs.readFileSync("./data").toString().trim().split("\n");
arr = arr.map((el) => +el);
N = N.split(" ");

let target = Number(N[1]);
let res = 0;

for (let i = arr.length - 1; i >= 0; i -= 1) {
  if (arr[i] <= target) {
    const div = Math.floor(target / arr[i]);
    res += div;
    target -= div * arr[i];
  }
  if (target === 0) {
    break;
  }
}

console.log(res);

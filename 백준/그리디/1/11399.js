// 시간을 구할 때 누적이 된다. 그 누적된 결과를 최소로 해야하므로 그리디이다.

const fs = require("fs");
let [N, arr] = fs.readFileSync("./data").toString().trim().split("\n");
N = parseInt(N);
arr = arr.split(" ").map((el) => +el);

arr.sort((a, b) => a - b);

let res = 0;
for (let i = 0; i < N; i++) {
  res += arr[i] * (N - i);
}
console.log(res);

const fs = require("fs");
let [N, money] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => +el);

let res = [];
if (26 * N < money || N > money) {
  console.log("!");
  return;
}
for (let i = 0; i < N; i++) {
  res.push("A");
  money -= 1;
}
for (let i = N - 1; i >= 0 && money > 0; i -= 1) {
  const plus = Math.min(money, 25);
  res[i] = String.fromCharCode(plus + 65);
  money -= plus;
}

console.log(res.join(""));

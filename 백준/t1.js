const fs = require("fs");
let [N, money] = fs
  .readFileSync("./data")
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
while (money > 0) {
  const idx = res.findIndex((el) => el === "A");
  const plus = Math.min(money, 25);
  res[idx] = String.fromCharCode(plus + 65);
  money -= plus;
}
res.sort();
console.log(res.join(""));

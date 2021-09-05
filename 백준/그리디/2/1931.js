// 최대의 개수를 구해야한다. 하지만 입력의 수가 100,000이므로 o(n) 또는 o(nlogn)으로 풀어야 할 것 같다.
// 그렇다면 어떻게 그리디 하게 풀 수 있을까?
// 가장 빨리 끝나는 순서로 정렬을 한다면, 모든 선택은 최적의 해를 가질 수 있다.

const fs = require("fs");
let [N, ...arr] = fs.readFileSync("./data").toString().trim().split("\n");

let std = 0;
let res = 0;
arr = arr
  .map((el) => el.split(" ").map((el) => +el))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0])
  .forEach(([start, end]) => {
    if (std <= start) {
      std = end;
      res += 1;
    }
  });

console.log(res);

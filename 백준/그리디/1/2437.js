const fs = require("fs");
let [_, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");
arr = arr[0].split(" ").map((e) => Number(e));

const solution = (arr) => {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] !== 1) {
    return 1;
  }
  let sum = 0;
  for (let i in arr) {
    i = Number(i);
    sum += arr[i];
    if (sum + 1 < arr[i + 1]) {
      return sum + 1;
    }
  }

  return sum + 1;
};

console.log(solution(arr));

let fs = require("fs");
let [N] = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);

let arr = [];
let ans = 0;

const isValid = (layer) => {
  for (let i = 0; i < layer; i += 1) {
    if (arr[layer] === arr[i]) return false;
    if (Math.abs(layer - i) === Math.abs(arr[layer] - arr[i])) return false;
  }
  return true;
};
const dfs = (idx) => {
  if (idx === N) {
    ans += 1;
    return;
  }
  for (let i = 0; i < N; i += 1) {
    arr[idx] = i;
    if (isValid(idx)) {
      dfs(idx + 1);
    }
  }
};
dfs(0);
console.log(ans, "asdf");

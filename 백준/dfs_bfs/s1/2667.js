const fs = require("fs");
let [Lines, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");
Lines = +Lines;
const map = [];
let ans = [];

for (let i = 0; i < Lines; i += 1) {
  map.push(arr[i].split("").map((v) => +v));
}

for (let y = 0; y < Lines; y += 1) {
  for (let x = 0; x < Lines; x += 1) {
    if (map[y][x] === 1) {
      ans[ans.length] = 0;
      dfs(x, y, ans.length - 1);
    }
  }
}

function dfs(x, y, ansIdx) {
  if (x < 0 || y < 0 || x >= Lines || y >= Lines) return;
  if (map[y][x] === 0) return;

  ans[ansIdx] += 1;
  map[y][x] = 0;

  dfs(x + 1, y, ansIdx);
  dfs(x - 1, y, ansIdx);
  dfs(x, y + 1, ansIdx);
  dfs(x, y - 1, ansIdx);
}
ans = ans.sort((a, b) => a - b);
console.log(ans.length);
ans.forEach((v) => console.log(v));

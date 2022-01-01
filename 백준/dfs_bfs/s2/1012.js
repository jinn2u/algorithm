const fs = require("fs");
let arr = fs.readFileSync("./data", "utf8").trim().split("\n");
let idx = 0;
let Count = parseInt(arr[idx++], 10);

for (let i = 0; i < Count; i += 1) {
  map = [];
  const [Cols, Rows, Baechoo] = arr[idx++].split(" ").map((v) => +v);
  for (let j = 0; j < Rows; j++) {
    map.push(new Array(Cols).fill(0));
  }
  for (let j = 0; j < Baechoo; j += 1) {
    const [m, n] = arr[idx++].split(" ");
    map[n][m] = 1;
  }

  let answer = 0;
  for (let j = 0; j < Rows; j += 1) {
    for (let k = 0; k < Cols; k += 1) {
      if (map[j][k] === 1) {
        answer += 1;
        dfs(j, k, Rows, Cols);
      }
    }
  }
  console.log(answer);
}

function dfs(y, x, rows, cols) {
  if (x < 0 || y < 0 || x >= cols || y >= rows) return;
  if (map[y][x] === 0) return;

  map[y][x] = 0;
  dfs(y, x - 1, rows, cols);
  dfs(y, x + 1, rows, cols);
  dfs(y + 1, x, rows, cols);
  dfs(y - 1, x, rows, cols);
}

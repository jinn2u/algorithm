const fs = require("fs");
let arr = fs.readFileSync("./data", "utf8").trim().split("\n");
const movesZ = [1, -1, 0, 0, 0, 0];
const movesY = [0, 0, 1, -1, 0, 0];
const movesX = [0, 0, 0, 0, 1, -1];
const isL = (str) => str.split(" ").length === 3;

arr.forEach((el, idx) => {
  let L, R, C;
  if (!isL(el)) return;
  [L, R, C] = el.split(" ").map(Number);
  let startX = 0,
    startY = 0,
    startZ = 0;

  if (L === 0) return;
  let board = [];
  let visited = [];
  let tmp = [],
    tmp1 = [];
  let findS = false;

  arr.slice(idx + 1, idx + L * R + L + 1).forEach((el) => {
    if (el === "") {
      board.push(tmp);
      visited.push(tmp1);
      tmp = [];
      tmp1 = [];
      return;
    }
    tmp.push(el.split(""));
    tmp1.push(new Array(C).fill(0));
  });

  for (let z = 0; z < L; z += 1) {
    if (findS) break;
    for (let y = 0; y < R; y += 1) {
      if (findS) break;
      for (let x = 0; x < C; x += 1) {
        if (findS) break;
        if (board[z][y][x] === "S") {
          startX = x;
          startY = y;
          startZ = z;
          findS = true;
        }
      }
    }
  }

  const ans = bfs();
  console.log(ans);

  function bfs() {
    const queue = [];
    queue.push([startX, startY, startZ]);

    while (queue.length) {
      const [x, y, z] = queue.shift();
      if (board[z][y][x] === "E")
        return `Escaped in ${visited[z][y][x]} minute(s).`;

      for (let i = 0; i < 6; i += 1) {
        const nextX = x + movesX[i];
        const nextY = y + movesY[i];
        const nextZ = z + movesZ[i];
        const valid = isValid(nextX, nextY, nextZ);
        if (valid) {
          queue.push([nextX, nextY, nextZ]);
          visited[nextZ][nextY][nextX] = visited[z][y][x] + 1;
        }
      }
    }
    return "Trapped!";
  }
  function isValid(x, y, z) {
    return (
      0 <= x &&
      x < C &&
      0 <= y &&
      y < R &&
      0 <= z &&
      z < L &&
      board[z][y][x] !== "#" &&
      !visited[z][y][x]
    );
  }
});

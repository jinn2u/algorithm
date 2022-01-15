let visited = [];
let grid = [];
const direction = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };

function solution(arr) {
  const result = [];
  visited = arr.map((row) =>
    row.split("").map((_) => new Array(4).fill(false))
  );

  grid = arr.map((row) => row.split(""));
  visited.forEach((row, y) => {
    row.forEach((col, x) => {
      col.forEach((isVisited, dirIdx) => {
        if (!isVisited) {
          result.push(verify(x, y, dirIdx));
        }
      });
    });
  });

  return result.sort((a, b) => a - b);
}

function verify(x, y, dirIdx) {
  let result = 0;

  while (true) {
    if (visited[y][x][dirIdx]) break;
    visited[y][x][dirIdx] = true;
    result++;
    x = (x + direction[dirIdx][0] + visited[0].length) % visited[0].length;
    y = (y + direction[dirIdx][1] + visited.length) % visited.length;

    if (grid[y][x] === "L") dirIdx = (dirIdx + 3) % 4;
    if (grid[y][x] === "R") dirIdx = (dirIdx + 1) % 4;
  }

  return result;
}
console.log(solution(["R", "R"]));

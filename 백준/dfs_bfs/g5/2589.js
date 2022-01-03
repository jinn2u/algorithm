const fs = require("fs");
let [Direction, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");
const [Rows, Cols] = Direction.split(" ").map((v) => +v);
const board = arr.map((line) => line.split(""));
const moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let maxMove = 0;

const isValid = (curX, curY) =>
  0 <= curX &&
  curX < Cols &&
  0 <= curY &&
  curY < Rows &&
  board[curY][curX] === "L";

const bfs = (x, y) => {
  const queue = [];
  const visited = [];
  let head = 0;

  queue.push({ x, y, distance: 0 });
  visited[y] = [];
  visited[y][x] = true;

  while (head < queue.length) {
    const { x: curX, y: curY, distance } = queue[head++];
    moves.forEach((move) => {
      const nextX = curX + move[0];
      const nextY = curY + move[1];

      if (!isValid(nextX, nextY)) return;
      if (visited[nextY] && visited[nextY][nextX]) return;
      if (!visited[nextY]) visited[nextY] = [];
      visited[nextY][nextX] = true;
      queue.push({ x: nextX, y: nextY, distance: distance + 1 });
    });
    if (head === queue.length) {
      return distance;
    }
  }
};

for (let y = 0; y < Rows; y += 1) {
  for (let x = 0; x < Cols; x += 1) {
    if (board[y][x] === "L") {
      maxMove = Math.max(bfs(x, y), maxMove);
    }
  }
}
console.log(maxMove);

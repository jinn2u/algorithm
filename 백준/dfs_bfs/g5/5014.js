const fs = require("fs");
let [F, S, G, U, D] = fs
  .readFileSync("./data", "utf8")
  .trim()
  .split(" ")
  .map(Number);

const visited = new Array(F + 1).fill(0);

const bfs = () => {
  const queue = [];
  queue.push([S, 0]);
  visited[S] = 1;
  while (queue.length) {
    const [num, count] = queue.shift();
    if (num === G) {
      console.log(count);
      return;
    }
    const up = num + U;
    const down = num - D;

    if (up <= F && !visited[up]) {
      queue.push([up, count + 1]);
      visited[up] = 1;
    }
    if (down > 1 && !visited[down]) {
      queue.push([down, count + 1]);
      visited[down] = 1;
    }
  }
  console.log("use the stairs");
};

bfs();

const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const { deflateSync } = require("zlib");
let [N, ...arr] = fs
  .readFileSync("./data", "utf8")
  .trim()
  .split("\n")
  .map(Number);

arr.unshift(0);

const result = [];
for (let i = 1; i < N + 1; i += 1) {
  visited = new Array(N).fill(0);
  search(i, i, visited);
}

function search(loopStart, curIdx, visited) {
  visited[curIdx] = true;
  nextIdx = arr[curIdx];
  if (!visited[nextIdx]) {
    search(loopStart, nextIdx, visited);
  } else if (visited[nextIdx] && nextIdx === loopStart) {
    result.push(loopStart);
  }
}

console.log(result.length);
result.forEach((val) => console.log(val));

const fs = require("fs");
let [n, count, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");

const stored = [...new Array(parseInt(n, 10) + 1)].map(() => []);
const visited = [...new Array(parseInt(n, 10) + 1)].map(() => false);

visited[1] = true;
let ans = 0;

arr.map((el) => {
  const [from, to] = el.split(" ").map((v) => +v);
  stored[from].push(to);
  stored[to].push(from);
});

const dfs = (from) => {
  stored[from].forEach((to) => {
    if (!visited[to]) {
      visited[to] = true;
      ans += 1;
      dfs(to);
    }
  });
};

dfs(1);
console.log(ans);

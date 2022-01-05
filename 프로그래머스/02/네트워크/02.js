let cpComputers;
let visited;
function solution(n, computers) {
  let ans = 0;
  cpComputers = computers;
  visited = new Array(n).fill(false);

  for (const idx in cpComputers) {
    ans += dfs(idx);
  }
  return ans;
}

function dfs(idx) {
  if (visited[idx] === true) return 0;
  visited[idx] = true;
  for (const i in cpComputers[idx]) {
    if (cpComputers[idx][i] == 1) {
      dfs(i);
    }
  }
  return 1;
}

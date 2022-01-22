function solution(n, wires) {
  let ans = Infinity;
  wires.forEach(([breakA, breakB]) => {
    const parent = Array.from({ length: n + 1 }, (_, idx) => idx);
    wires.forEach(([a, b]) => {
      if (!(a === breakA && b === breakB)) {
        unionParent(parent, a, b);
      }
    });

    for (let i = 1; i < n + 1; i += 1) {
      findParent(parent, i);
    }
    let tmp = 0;
    let std = parent[1];
    for (let i = 1; i < n + 1; i += 1) {
      if (std === parent[i]) {
        tmp += 1;
      }
    }
    ans = Math.min(ans, Math.abs(tmp - (n - tmp)));
  });

  return ans;
}

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

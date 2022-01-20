// N: 노드의 갯수, arr: 연결된 두 노드의 배열[[a,b],[c,d]]

function solution(N, arr) {
  const parent = Array.from({ length: N + 1 }, (_, idx) => idx);
  for (let i = 0; i < arr.length; i += 1) {
    const [a, b] = arr[i];
    unionParent(parent, a, b);
  }
  for (let i = 0; i < N; i += 1) {
    const a = findParent(parent, a);
    const b = findParent(parent, b);
    if (a === b) {
      console.log("싸이클이 발생했습니다.");
      return;
    } else {
      unionParent(parent, a, b);
    }
  }
}

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}
function unionParent(parent, a, b) {
  const a = findParent(parent, a);
  const b = findParent(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

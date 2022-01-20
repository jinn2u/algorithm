// 서로소 집합 구하기
// 서로소 집합은 공통 원소가 없는 두 집합을 의미한다.
// N: 노드의 수, arr: 집합
function solution(N, arr) {
  const parent = Array.from({ length: N + 1 }, (_, index) => index);
  arr.forEach(([a, b]) => {
    unionParent(parent, a, b);
  });
  for (let i = 1; i < N + 1; i += 1) {
    findParent(parent, i);
  }

  console.log(parent);
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
  solution(6, [
    [1, 4],
    [2, 3],
    [2, 4],
    [5, 6],
  ])
);

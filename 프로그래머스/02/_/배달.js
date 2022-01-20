function solution(N, road, k) {
  const arr = new Array(N + 1).fill(Infinity);
  const weights = Array.from({ length: N + 1 }, () => []);

  for (const [to, from, weight] of road) {
    weights[to].push({ to: from, time: weight });
    weights[from].push({ to, time: weight });
  }
  const pq = [{ to: 1, time: 0 }];
  arr[1] = 0;
  while (pq.length) {
    let { to, time } = pq.pop();
    for (const next of weights[to]) {
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time;
        pq.push(next);
      }
    }
  }
  return arr.filter((item) => item <= k).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);

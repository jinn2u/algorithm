function solution(N, road, k) {
  const weights = new Array(N + 1).fill(Infinity);
  const arr = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < road.length; i += 1) {
    const [from, to, weight] = road[i];
    arr[from].push({ to: to, weight: weight });
    arr[to].push({ to: from, weight: weight });
  }

  const queue = [{ to: 1, weight: 0 }];
  weights[1] = 0;

  while (queue.length) {
    const { to, weight } = queue.pop();

    for (let i = 0; i < arr[to].length; i += 1) {
      const next = arr[to][i];
      if (weights[next.to] > weights[to] + next.weight) {
        weights[next.to] = weights[to] + next.weight;
        queue.push(next);
      }
    }
  }
  return weights.filter((weight) => weight <= k).length;
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

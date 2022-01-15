function solution(maps) {
  const queue = [];
  let visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  queue.push([0, 0, 1]);
  visited[0][0] = true;
  while (queue.length) {
    const [x, y, amount] = queue.shift();

    for (const [moveY, moveX] of moves) {
      const nextX = x + moveX;
      const nextY = y + moveY;
      if (
        0 <= nextX &&
        nextX < maps[0].length &&
        0 <= nextY &&
        nextY < maps.length &&
        maps[nextY][nextX] &&
        !visited[nextY][nextX]
      ) {
        if (nextX === maps[0].length - 1 && nextY === maps.length - 1) {
          queue.length = 0;
          return amount + 1;
        }
        visited[nextY][nextX] = true;
        queue.push([nextX, nextY, amount + 1]);
      }
    }
  }
  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

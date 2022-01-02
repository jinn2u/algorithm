const solution = (rows, columns, queries) => {
  const answer = [];
  const arr = Array.from(new Array(rows + 1), () =>
    new Array(columns + 1).fill(0)
  );

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = (i - 1) * columns + j;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const std = arr[x1][y1];
    let min = std;

    // 왼쪽 아래에서 위로 올리기
    for (let i = x1; i < x2; i += 1) {
      min = Math.min(min, arr[i + 1][y1]);
      arr[i][y1] = arr[i + 1][y1];
    }
    // 아래에서 왼쪽으로 밀기
    for (let i = y1; i < y2; i += 1) {
      min = Math.min(min, arr[x2][i + 1]);
      arr[x2][i] = arr[x2][i + 1];
    }

    // 오른쪽에서 아래로 밀기
    for (let i = x2; i > x1; i -= 1) {
      min = Math.min(min, arr[i - 1][y2]);
      arr[i][y2] = arr[i - 1][y2];
    }
    // 위쪽에서 오른쪽으로 밀기
    for (let i = y2; i > y1; i -= 1) {
      min = Math.min(min, arr[x1][i - 1]);
      arr[x1][i] = arr[x1][i - 1];
    }
    arr[x1][y1 + 1] = std;

    answer.push(min);
  }
  return answer;
};

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
);
console.log(solution(100, 97, [[1, 1, 100, 97]]));

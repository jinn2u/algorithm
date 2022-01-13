const moves = [
  [0, 1],
  [0, 2],
  [1, 1],
  [1, 0],
  [2, 0],
  [-1, 1],
];
function solution(arrList) {
  const ans = [];
  arrList.forEach((arr) => {
    let illegal = false;
    for (let y = 0; y < 5; y += 1) {
      for (let x = 0; x < 5; x += 1) {
        for (let i = 0; i < moves.length; i += 1) {
          const nextX = x + moves[i][1];
          const nextY = y + moves[i][0];
          if (
            0 <= nextX &&
            0 <= nextY &&
            nextX < 5 &&
            nextY < 5 &&
            arr[y][x] === "P" &&
            arr[nextY][nextX] === "P"
          ) {
            if (i === 0 || i === 3) {
              illegal = true;
            } else if (i === 1) {
              if (arr[nextY][nextX - 1] !== "X") {
                illegal = true;
                break;
              }
            } else if (i === 4) {
              if (arr[nextY - 1][nextX] !== "X") {
                illegal = true;
                break;
              }
            } else if (i === 2) {
              if (
                !(
                  arr[nextY - 1][nextX] === "X" && arr[nextY][nextX - 1] === "X"
                )
              ) {
                illegal = true;
                break;
              }
            } else if (i === 5) {
              if (
                !(
                  arr[nextY][nextX - 1] === "X" && arr[nextY + 1][nextX] === "X"
                )
              ) {
                illegal = true;
                break;
              }
            }
          }
        }
      }
    }
    if (!illegal) {
      ans.push(1);
    } else {
      ans.push(0);
    }
  });
  return ans;
}
console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);

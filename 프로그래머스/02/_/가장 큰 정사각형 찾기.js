function solution(board) {
  const rowLen = board.length;
  const colLen = board[0].length;
  let ans = 0;
  if (rowLen < 2 || colLen < 2) return 1;
  for (let y = 1; y < rowLen; y += 1) {
    for (let x = 1; x < colLen; x += 1) {
      if (board[y][x]) {
        const minValue =
          Math.min(board[y - 1][x - 1], board[y][x - 1], board[y - 1][x]) + 1;
        board[y][x] = minValue;
        ans = Math.max(minValue, ans);
      }
    }
  }
  return ans ** 2;
}

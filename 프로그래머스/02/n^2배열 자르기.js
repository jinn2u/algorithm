function solution(n, left, right) {
  const ans = [];
  while (left <= right) {
    const y = Math.floor(left / n) + 1;
    const x = (left % n) + 1;
    ans.push(Math.max(y, x));
    left += 1;
  }
  return ans;
}

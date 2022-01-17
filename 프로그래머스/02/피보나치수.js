function solution(n) {
  const arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  for (let i = 2; i <= n; i += 1) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}
console.log(solution(7));

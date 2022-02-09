function solution(n) {
  let ans = 0;
  while (n > 0) {
    if (!(n % 2)) {
      n /= 2;
    } else {
      n -= 1;
      ans += 1;
    }
  }
  return ans;
}
console.log(solution(5000));

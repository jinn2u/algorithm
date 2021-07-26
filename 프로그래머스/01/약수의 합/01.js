function solution(n) {
  let res = 0
  for (let i = 0; i <= n ** 0.5; i++) {
    if (n % i < 1) {
      res = n / i !== i ? res + i + n / i : res + i
    }
  }
  return res
}


let n = 0
function Collatz(num) {
  if (n > 501) return -1
  if (num === 1) return n
  else if (num % 2 === 0) {
    n += 1; num /= 2;
    return Collatz(num)
  }
  else {
    num = num * 3 + 1; n += 1;
    return Collatz(num)
  }
}
function solution(num) {
  return Collatz(num)
}
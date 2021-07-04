function GCD(n1, n2) {
  if (n2 === 0) return n1
  return GCD(n2, n1 % n2)
}
function solution(n, m) {
  const gcd = GCD(n, m)
  return [gcd, n * m / gcd]
}
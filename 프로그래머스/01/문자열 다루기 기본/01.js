function solution(s) {
  let a = /(^\d{6}$)|(^\d{4}$)/
  return a.test(s)
}
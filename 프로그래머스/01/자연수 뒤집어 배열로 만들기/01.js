function solution(n) {
  return [...(""+n)].reverse().map(el => +el)
}
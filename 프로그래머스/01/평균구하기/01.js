function solution(arr) {
  return arr.reduce((accu, curr) => accu + curr, 0) / arr.length
}
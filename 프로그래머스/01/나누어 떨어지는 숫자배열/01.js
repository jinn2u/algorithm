function solution(arr, divisor) {
  const res = arr.filter(el => el%divisor === 0)
  return  res.length === 0 ? [-1]: res.sort((a,b)=>a-b)
}
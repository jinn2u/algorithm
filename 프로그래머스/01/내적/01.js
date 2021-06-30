function solution(a, b) {
  let res = 0
  for(let i=0; i<a.length; i++){
      res += a[i]*b[i]
  }
  return res
}
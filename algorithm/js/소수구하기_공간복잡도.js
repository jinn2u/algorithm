function solution(n) {
  let result = 0
  let arr = Array(n).fill(0)
  for(let i=2; i<=n; i++){
      if(!arr[i]) result++
      for(let j=i*2; j<=n; j+=i) arr[j] = 1            
  }
  return result
}

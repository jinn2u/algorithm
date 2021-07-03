function yaksu(num){
  let arr = []
  for(let i=1; i<(num**0.5)+1; i++){
    if(num%i === 0){
      i === num/i 
        ? arr = [...arr, i]
        : arr = [...arr, i, num/i]
    }
  }
  return arr
}

function solution(left, right) {
    let ans = 0
    for(let i=left; i<=right; i++){
        yaksu(i).length%2===0 ? ans+=i : ans-=i
    }
    return ans
}
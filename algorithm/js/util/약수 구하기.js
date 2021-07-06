function yaksu(num){
  if (num<2) return [num]
  let arr = []
  for(let i=1; i<parseInt(num**0.5)+1; i++){
    if(num%i === 0){
      i === num/i 
        ? arr = [...arr, i]
        : arr = [...arr, i, num/i]
    }
  }
  return arr
}


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
console.log(yaksu(9)) // [1, 9, 3]

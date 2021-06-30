function solution(n, lost, reserve) {
  lost = lost.filter(el => {
      if(reserve.includes(el)) reserve = reserve.filter(a => a!==el)   
      else return true
  })
  n -= lost.filter(el =>{
      const a = reserve.find(a =>Math.abs(a-el)===1)
      if(!a) return true
      else reserve = reserve.filter(el=> el!==a)
  }).length
  return n
}
console.log(solution(5, [2,3,4] ,[1,2,3] ))
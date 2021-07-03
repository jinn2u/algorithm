function solution(d, budget) {
  d.sort((a,b)=>a-b)
  let result =0
   d.reduce((acc,cur)=> {
      if(acc+cur<=budget){
          result++
          return acc+cur  
      } 
  },0)
  return result
}
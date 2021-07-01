function solution(absolutes, signs) {
  const sum = absolutes.reduce((acc,cur,idx)=>{
    if(signs[idx]) return acc+cur
    else return acc-cur
  },0)
  return sum
}
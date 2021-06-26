function solution(lottos, win_nums){
  const rank = [6,6,5,4,3,2,1]
  
  let minCount = lottos.filter(el=> win_nums.includes(el)).length
  let zeroCount = lottos.filter(el => ).length
  const maxCount = minCount+zeroCount
  return [rank[maxCount], rank[minCount]]
}
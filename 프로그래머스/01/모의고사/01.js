function solution(ans){
  const first = [1,2,3,4,5]
  const second = [2,1,2,3,2,4,2,5]
  const third = [3,3,1,1,2,2,4,4,5,5]
  const count = [0,0,0]
  const answer = []

  for(let i=0; i<ans.length; i++){
    if(ans[i]===first[i%first.length]) count[0]++;
    if(ans[i]===second[i%second.length]) count[1]++;
    if(ans[i]===third[i%third.length]) count[2]++;
  }
  for(let i=0; i<3; i++){
    if(count[i] === Math.max(...count)){
      answer.push(i+1) 
    }
  }
  return answer
}
console.log(solution([1,2,3,4,5]))

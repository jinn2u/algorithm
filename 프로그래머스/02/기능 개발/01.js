function solution(progs, speeds) {
  const progs1 = [...progs].map((cur,idx)=>{
      return Math.ceil((100-cur)/speeds[idx])
  })
  let result = [0]
  let std = progs1[0]
  for(let i=0; i<progs1.length; i++){
      if(std>=progs1[i])  result[result.length-1]+=1
      else {
          std = progs1[i]
          result.push(1)
      }
  }
  return result
}
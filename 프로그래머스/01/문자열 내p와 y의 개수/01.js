function solution(s){
  let p = 0; let y = 0
  s = s.toLowerCase()
  Array.from(s).forEach(el=>{
      if (el==="p") p+=1
      else if (el==="y") y+=1
  })
  return p===y
}
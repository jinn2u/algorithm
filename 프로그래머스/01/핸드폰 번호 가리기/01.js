function solution(phone) {
  let res = ""
  for(let i=0; i<phone.length-4;i++)res+="*"
  res+=phone.slice(-4)
  return  res
}
function solution(a, b) {
  let month =[31,29,31,30,31,30,31,31,30,31,30,31]
  const date = ['FRI','SAT','SUN','MON','TUE','WED','THU',]
  let day = month.reduce((acc,cur,idx)=>{
      return idx<a-1 ? acc+cur : acc
  },0)   
  day= day+b-1
  return date[day%7]
}
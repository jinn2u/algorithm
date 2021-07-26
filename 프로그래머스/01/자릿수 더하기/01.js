function solution(n){
  return [...n.toString()].reduce((pre, cur) => {
      return pre + parseInt(cur);
  }, 0);
}
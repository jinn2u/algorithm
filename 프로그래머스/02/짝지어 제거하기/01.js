const solution = (str) => {
  if (str.length % 2 > 0) {
    return 0;
  }
  let stack = [];
  for (let i = 0; i < str.length; i += 1) {
    if (stack.length < 1) {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
        continue;
      } else {
        stack.push(str[i]);
      }
    }
  }
  return stack.length > 0 ? 0 : 1;
};
console.log(solution("cdcd"));
console.log(solution("baabaa"));

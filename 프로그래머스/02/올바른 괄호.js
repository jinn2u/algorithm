const solution = (s) => {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    if (ch === "(") stack.push(ch);
    else {
      if (stack[stack.length - 1] === ")") return false;
      stack.pop();
    }
  }
  return stack.length ? false : true;
};

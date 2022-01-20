// 정규식으로도 풀 수 있지만 if문으로 푸는것이 속도가 훨씬 빠르다
function solution(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    s = s.slice(1, s.length) + s[0];
    let string = s;
    for (let j = 0; j < Math.floor(s.length / 2); j++) {
      string = string.replace(/(\[\]|\{\}|\(\))/g, "");
      if (!string) break;
    }
    ans += !string ? 1 : 0;
  }
  return ans;
}

function solution(s) {
  const strLen = s.length;
  let ans = 0;
  for (let change = 0; change < strLen - 1; change += 1) {
    const stack = [];
    for (let i = 0; i < strLen; i += 1) {
      const ch = s[i];
      const lastStack = stack[stack.length - 1];
      if (ch === ")") {
        if (lastStack === "(") {
          stack.pop();
        } else {
          stack[stack.length] = ch;
        }
      } else if (ch === "}") {
        if (lastStack === "{") {
          stack.pop();
        } else {
          stack[stack.length] = ch;
        }
      } else if (ch === "]") {
        if (lastStack === "[") {
          stack.pop();
        } else {
          stack[stack.length] = ch;
        }
      } else {
        stack[stack.length] = ch;
      }
    }
    if (!stack.length) ans += 1;
    s = s.substring(1) + s[0];
  }
  return ans;
}

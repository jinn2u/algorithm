function dfs(str) {
  let ans = "";
  let left = 0;
  let right = 0;
  let isRight = true;
  // 1단계
  if (str === "") return str;
  // 2단계
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "(") left += 1;
    else right += 1;
    if (right > left) isRight = false;
    if (left === right) {
      // 3단계
      // u가 올바른 문자열이라면
      if (isRight) {
        ans += str.slice(0, i + 1);
        ans += dfs(str.slice(i + 1));
        return ans;
      }
      // 올바른 문자열이 아닌 경우
      return (
        "(" +
        dfs(str.slice(i + 1, str.length)) +
        ")" +
        str.slice(1, i).replace(/\(|\)/g, (chr) => (chr === "(" ? ")" : "("))
      );
    }
  }
}
console.log(dfs("(()())()"));

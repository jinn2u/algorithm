function solution(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const arr = new Array(numRows).fill("");
  const std = numRows - 1;
  let direction = true;
  let idx = 0;

  for (let i = 0; i < s.length; i += 1) {
    arr[idx] += s[i];
    if (i && i % std === 0) {
      direction = !direction;
    }
    if (direction) {
      idx += 1;
    } else {
      idx -= 1;
    }
  }
  return arr.join("");
}
console.log(solution("AB", 1));

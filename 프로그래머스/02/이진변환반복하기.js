function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s.length > 1) {
    count += 1;
    const tmp = s.replace(/0/g, "");
    zeroCount += s.length - tmp.length;
    s = tmp.length.toString(2);
  }
  return [count, zeroCount];
}
console.log(solution("110010101001"));

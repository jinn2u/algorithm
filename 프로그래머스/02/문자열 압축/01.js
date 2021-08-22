const countStr = (str, ch, size) => {
  let result = "";
  let count = 1;
  for (let i = size; i < str.length; i += size) {
    let ch2 = str.slice(i, i + size);
    if (ch === ch2) {
      count += 1;
    } else {
      count = count > 1 ? String(count) : "";
      result += count + ch;
      ch = ch2;
      count = 1;
    }
  }

  count = count > 1 ? String(count) : "";
  result += count + ch;

  return result;
};

const solution = (str) => {
  let answer = str.length;
  const length = str.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    let ch = str.slice(0, i);
    let compressed = countStr(str, ch, i);
    answer = Math.min(answer, compressed.length);
  }

  return answer;
};
console.log(solution("abcabcabcabcdededededede"));

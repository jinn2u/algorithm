const fs = require("fs");
const [n, ...input] = fs.readFileSync("./data").toString().trim().split("\n");
const alpabet = new Array(26).fill(0);

function solution(n, input) {
  //알파벳 가중치 더하기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < input[i].length; j++) {
      alpabet[input[i].charCodeAt(j) - 65] += Math.pow(10, input[i].length - (j + 1));
    }
  }
  // //내림차순으로 정렬
  alpabet.sort((a, b) => b - a);
  // //최대값설정
  let value = 10;
  const sum = alpabet.reduce((pre, cur) => {
    if (value === 0) return pre;
    value--;
    return pre + cur * value;
  }, 0);

  return sum;
}

console.log(solution(n, input));

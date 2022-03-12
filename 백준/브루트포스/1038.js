let fs = require("fs");
let [N] = fs.readFileSync("./data").toString().split("\n").map(Number);

const solution = (N) => {
  if (N > 1022) return -1;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const counts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (counts.length) {
    const c = counts.shift();
    const stringC = c + "";

    let last = +stringC[stringC.length - 1] - 1;
    while (last > -1) {
      const newWord = Number(stringC + last.toString());
      counts.push(newWord);
      arr.push(newWord);
      last--;
    }
  }
  arr.sort((a, b) => a - b);
  return arr[N];
};
console.log(solution(N));

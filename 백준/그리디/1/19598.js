const solution = (arr) => {
  arr = arr.sort((a, b) => a[0] - b[0]);
  let end = [0];
  for (let i = 0; i < arr.length; i += 1) {
    const endIdx = end.findIndex((el) => el <= arr[i][0]);
    if (endIdx > -1) {
      end[endIdx] = arr[i][1];
    } else {
      end.push(arr[i][1]);
    }
  }
  console.log(end.length);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", () => {
  let [_, ...arr] = input;
  arr = arr.map((el) => el.split(" ").map((el) => +el));
  solution(arr);
});

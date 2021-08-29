const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, ...a] = input.map((e) => +e);
  let sorted = a.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < N - 2; i += 3) {
    res = res + sorted[i] + sorted[i + 1];
  }
  const rest = N % 3;
  if (rest !== 0) {
    for (let i = 1; i <= rest; i++) {
      res += sorted[N - i];
    }
  }
  console.log(res);
  process.exit();
});

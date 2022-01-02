const fs = require("fs");
let [n, ...arr] = fs.readFileSync("./data", "utf8").trim().split("\n");

const [Rows, Cols] = n.split(" ").map((v) => +v);
const room = arr.map((v) => v.split(""));
let answer = 0;

for (let i = 0; i < Rows; i++) {
  let flag = true;
  for (let j = 0; j < Cols; j++) {
    if (flag === true && room[i][j] === "-") {
      answer += 1;
      flag = false;
    } else if (room[i][j] === "|") {
      flag = true;
    }
  }
}
for (let i = 0; i < Cols; i += 1) {
  let flag = true;
  for (let j = 0; j < Rows; j += 1) {
    if (flag === true && room[j][i] === "|") {
      answer += 1;
      flag = false;
    } else if (room[j][i] === "-") {
      flag = true;
    }
  }
}
console.log(answer);

const fs = require("fs");
let input = fs.readFileSync("./data", "utf8").trim().split("\n");
let str = input[0];

let p = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "P") {
    p += 1;
  } else if (str[i] === "A") {
    if (str[i + 1] !== "P" || p < 2) {
      console.log("NP");
      return;
    }
    p -= 2;
  }
}
if (p === 1) {
  console.log("PPAP");
} else {
  console.log("NP");
}

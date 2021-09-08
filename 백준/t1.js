const fs = require("fs");
let [_, ...arr] = fs
  .readFileSync("./data")
  .toString()
  .split(" ")
  .map((el) => +el);

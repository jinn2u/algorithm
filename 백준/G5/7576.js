let fs = require("fs");
let [N, ...arr] = fs.readFileSync("dev/stdin").toString().split("\n");

const [cols, rows] = N.split(" ").map(Number);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let tomatoNum = cols * rows;
let ripeCount = 0;
let prevRipeList = [];
let day = 0;

const box = arr.map((s, r) =>
  s.split(" ").map((v, c) => {
    const tomato = Number(v);
    if (tomato === -1) tomatoNum -= 1;
    else if (tomato === 1) {
      prevRipeList.push(`${r} ${c}`);
      ripeCount += 1;
    }
    return tomato;
  })
);

const newRipeList = new Set();

while (true) {
  prevRipeList.forEach((v) => {
    const [r, c] = v.split(" ").map(Number);
    dx.forEach((x, idx) => {
      const nextX = x + c;
      const nextY = dy[idx] + r;
      if (
        nextX >= 0 &&
        nextX < cols &&
        nextY >= 0 &&
        nextY < rows &&
        !box[nextY][nextX]
      ) {
        box[nextY][nextX] = 1;
        newRipeList.add(`${nextY} ${nextX}`);
      }
    });
  });
  if (!newRipeList.size) break;

  day += 1;
  ripeCount += newRipeList.size;
  prevRipeList = Array.from(newRipeList);
  newRipeList.clear();
}
console.log(ripeCount === tomatoNum ? day : -1);

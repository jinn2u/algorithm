// 값을 최소로 만들어야한다.
// 그렇다면 어떻게 최소로 만들어야 할까?
// -는 최대한 미룬 다음, +를 다 더한 후 마지막에 -를 하면 된다.
// 이때의 기준은 + 다음에 -가 나올때 까지 최대한 더하는것이다.

// 예를 들어(-40+30+30+30-10)이라면,
// 최초의 -는 미룬다.
// 40+30+30+30을 다 더한다 (다음 -가 나올때까지)
// 더한것에다가 -를 붙인다.

// 쉽게 하기 위해서는 -를 기준으로 split을 한다면, [40+30+30+30], [10]이렇게 나오게 되므로 split한 것끼리 빼주면 된다.

const fs = require("fs");
let str = fs.readFileSync("./data").toString().trim();

str = str.split("-");

const first = str[0].split("+").reduce((acc, cur) => acc + parseInt(cur), 0);

const res = str.reduce((acc, cur) => {
  cur = cur.split("+").reduce((acc, cur) => acc + parseInt(cur), 0);
  return acc - cur;
}, first * 2);

console.log(res);

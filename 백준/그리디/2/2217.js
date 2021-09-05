// 최대 중량을 구하는 문제이다. 게다가 입력이 100,000이 넘어가기 때문에 그리디를 생각해보자
// 모든 로프를 사용할 필요가 없는것이 포인트이다. 따라서 모든 로프를 순회하면서 갯수가 증가할 때 마다의 최댓값을 구하면 된다.
// 이렇게 하면 O(n)이 나온다.
// 실수했던부분은 큰 순서대로 정렬을 하면, 다음결과가 현재 값보다 작으면 뒤는 볼 필요가 없다고 생각했었는데 그게 아니다.(3 11 5 4)

const solution = (N, arr) => {
  arr = arr.sort((a, b) => b - a);
  let res = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    const aftMax = arr[i] * (i + 1);
    if (res < aftMax) {
      res = aftMax;
    }
  }
  return res;
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, ...arr] = input.map((el) => +el);
  console.log(solution(N, arr));
});

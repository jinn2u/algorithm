const solution = (orders, courses) => {
  let answer = [];
  for (let i = 0; i < courses.length; i += 1) {
    let size = courses[i];
    const map = new Map();
    for (let j = 0; j < orders.length; j += 1) {
      const order = orders[j];
      combination(size, 0, 0, "", order, map);
    }
    getMaxSet(map, answer);
  }
  answer = answer.sort();
  return answer;
};
function combination(n, r, start, str, order, map) {
  if (r == n) {
    let key = str.split("").sort().join("");
    const times = map.has(key) ? map.get(key) + 1 : 1;
    map.set(key, times);
    return;
  }

  for (let i = start; i < order.length; i += 1) {
    const ch = order[i];
    // start를 1씩 늘림으로써 모든 경우의 수에 따라 combination을 할 수 있다.
    combination(n, r + 1, i + 1, str + ch, order, map);
  }
}
function getMaxSet(map, answer) {
  let max = 0;
  for (let value of map.values()) {
    if (max < value) {
      max = value;
    }
  }
  for (let [key, value] of map) {
    if (max === value && max !== 1) {
      answer.push(key);
    }
  }
}
console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);

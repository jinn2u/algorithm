function solution(orders, course) {
  const ans = [];
  course.forEach((foodLen) => {
    const cases = {};
    orders.forEach((order) => {
      combination(order, foodLen, "", 0, cases);
    });
    getMaxCase(cases, ans);
  });
  ans.sort();
  return ans;
}

function combination(order, foodLen, word, start, cases) {
  if (word.length === foodLen) {
    word = word.split("").sort().join("");
    cases[word] = cases[word] ? cases[word] + 1 : 1;
  }
  for (let i = start; i < order.length; i += 1) {
    combination(order, foodLen, word + order[i], i + 1, cases);
  }
}
function getMaxCase(cases, ans) {
  const maxLen = Math.max(...Object.values(cases));
  if (maxLen === 1) {
    return;
  }
  for (const key in cases) {
    if (cases[key] === maxLen) {
      ans[ans.length] = key;
    }
  }
}

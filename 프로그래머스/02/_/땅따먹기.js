const solution = (lands) => {
  let maxIdx = null;
  let ans = 0;
  lands.forEach((land, idx) => {
    if (idx > 0) {
      land[maxIdx] = 0;
    }
    const maxNum = Math.max(...land);
    ans += maxNum;
    maxIdx = land.findIndex((v) => v === maxNum);
  });
  return ans;
};

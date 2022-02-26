const solution = (n) => {
  let ans = 0;
  let std = 0;
  while (true) {
    std += 1;
    if (std + std + 1 > n) return ans + 1;
    let sum = 0;
    let start = std;
    while (true) {
      sum += start;
      start += 1;
      if (sum > n) break;
      if (sum === n) {
        console.log(sum, std);
        ans += 1;
        break;
      }
    }
  }
};
console.log(solution(20));

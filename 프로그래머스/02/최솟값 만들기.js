const solution = (a, b) => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
};
console.log(solution([1, 2], [3, 4]));

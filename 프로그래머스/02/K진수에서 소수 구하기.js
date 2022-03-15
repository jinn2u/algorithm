function isPrimary(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

const solution = (n, k) => {
  return n
    .toString(k)
    .split("0")
    .reduce((acc, cur) => (isPrimary(+cur) ? acc + 1 : acc), 0);
};

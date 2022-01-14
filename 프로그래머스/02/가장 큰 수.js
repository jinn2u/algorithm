function solution(numbers) {
  const newNumbers = numbers.sort((a, b) => {
    a = a + "";
    b = b + "";
    if (+a[0] < +b[0]) {
      return 1;
    }
    if (+a[0] > +b[0]) {
      return -1;
    }
    if (+a[0] === +b[0]) {
      if (+(a + b) > +(b + a)) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  const ans = newNumbers.join("");
  return +ans === 0 ? "0" : ans;
}

var reverse = function (x) {
  let str = +Math.abs(x).toString().split("").reverse().join("");
  if (str > 2 ** 31) {
    return 0;
  }
  return x < 0 ? str * -1 : str;
};

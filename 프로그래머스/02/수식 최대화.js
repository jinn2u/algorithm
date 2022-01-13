const orders = [
  ["+", "-", "*"],
  ["+", "*", "-"],
  ["-", "+", "*"],
  ["-", "*", "+"],
  ["*", "+", "-"],
  ["*", "-", "+"],
];

function solution(expression) {
  let numbers = [];
  let operators = [];
  let ans = 0;
  let tmp = "";
  for (let i = 0; i < expression.length; i += 1) {
    const ch = expression[i];
    if (Number.isInteger(+ch)) {
      tmp += ch;
    } else {
      operators.push(ch);
      numbers.push(+tmp);
      tmp = "";
    }
  }
  numbers.push(+tmp);
  orders.forEach((order) => {
    const numbers_cp = numbers.slice();
    const operators_cp = operators.slice();
    order.forEach((sep) => {
      for (let i = 0; i < operators_cp.length; i += 1) {
        if (operators_cp[i] === sep) {
          if (sep === "+") {
            numbers_cp[i] += numbers_cp[i + 1];
          } else if (sep === "-") {
            numbers_cp[i] -= numbers_cp[i + 1];
          } else {
            numbers_cp[i] *= numbers_cp[i + 1];
          }
          operators_cp.splice(i, 1);
          numbers_cp.splice(i + 1, 1);
          i -= 1;
        }
      }
    });
    ans = Math.max(ans, Math.abs(numbers_cp[0]));
  });
  return ans;
}
console.log(solution("100-200*300-500+20"));

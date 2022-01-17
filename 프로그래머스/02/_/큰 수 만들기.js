function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i += 1) {
    while (k) {
      if (stack[stack.length - 1] < number[i]) {
        stack.pop();
        k -= 1;
      } else {
        break;
      }
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}

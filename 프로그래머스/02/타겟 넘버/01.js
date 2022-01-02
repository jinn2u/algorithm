const solution = (numbers, target) => {
  let answer = 0;

  const recur = (idx, value) => {
    if (idx < numbers.length) {
      recur(idx + 1, value + numbers[idx]);
      recur(idx + 1, value - numbers[idx]);
    } else {
      value === target && (answer += 1);
    }
  };
  recur(0, 0);
  return answer;
};

console.log(solution([1, 1, 1, 1, 1], 3));

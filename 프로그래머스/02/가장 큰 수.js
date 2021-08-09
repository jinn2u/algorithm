function solution(numbers) {
  let result = "";
  const tmp = numbers.map((number, index) => {
    let tmp = number.toString();
    return [tmp.padEnd(4, tmp.slice(0, 4 - tmp.length)), index];
  });
  tmp.sort((a, b) => Number(b[0]) - Number(a[0]));
  tmp.forEach((arr) => (result += numbers[arr[1]].toString()));
  return result.replace(/0/g, "").length > 0 ? result : "0";
}

console.log(solution([0, 0, 0]));

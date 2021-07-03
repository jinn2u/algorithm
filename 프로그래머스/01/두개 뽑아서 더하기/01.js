function solution(numbers) {
  let result = []
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let num = numbers[i] + numbers[j]
      if (!result.includes(num))
        result = [...result, num]
    }
  }
  result.sort((a, b) => a - b)
  return result
}
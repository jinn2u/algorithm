function solution(people, limit) {
  let ans = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    const leftPerson = people[left];
    const rightPerson = people[right];
    if (leftPerson + rightPerson <= limit) {
      left += 1;
    }
    right -= 1;
    ans += 1;
  }
  return ans;
}

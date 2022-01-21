function solution(people, limit) {
  let ans = 0;
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  while (l < r) {
    if (people[l] + people[r] <= limit) {
      l += 1;
    }
    r -= 1;
    ans += 1;
  }
  return l === r ? ans + 1 : ans;
}

function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let ans = 0;
  while (true) {
    if (ans + 1 <= citations[ans]) {
      ans += 1;
    } else {
      return ans;
    }
  }
}

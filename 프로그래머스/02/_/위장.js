function solution(clothes) {
  let ans = 1;
  const obj = new Map();
  for (const [_, type] of clothes) {
    obj.has(type) ? obj.set(type, obj.get(type) + 1) : obj.set(type, 2);
  }
  for (const key of obj.keys()) {
    ans *= obj.get(key);
  }

  return ans - 1;
}

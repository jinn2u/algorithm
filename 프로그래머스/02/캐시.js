function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;
  let ans = 0;
  const cache = [];
  for (let city of cities) {
    city = city.toLowerCase();
    const idx = cache.findIndex((val) => val === city);
    if (idx === -1) {
      ans += 5;
      cache[cache.length] = city;
      cache.length > cacheSize && cache.shift();
    } else {
      ans += 1;
      cache[cache.length] = city;
      cache.splice(idx, 1);
    }
  }
  return ans;
}
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));

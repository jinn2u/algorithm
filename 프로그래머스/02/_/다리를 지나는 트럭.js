function solution(bridge_length, weight, truck_weights) {
  let ans = 0;
  const queue = new Array(bridge_length).fill(0);
  let queueSize = 0;
  while (queue.length) {
    const removeTruck = queue.shift();
    ans += 1;
    queueSize -= removeTruck;
    if (truck_weights.length) {
      if (queueSize + truck_weights[0] <= weight) {
        const newTruck = truck_weights.shift();
        queue.push(newTruck);
        queueSize += newTruck;
      } else {
        queue.push(0);
      }
    }
  }

  return ans;
}
console.log(solution(2, 10, [7, 4, 5, 6]));

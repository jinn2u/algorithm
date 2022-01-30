function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let ans = 0;
  let stagingWeight = 0;
  let coord = 0;
  while (queue.length) {
    stagingWeight -= queue.shift();
    const waitTruck = truck_weights[coord];
    ans += 1;
    if (!waitTruck) {
      continue;
    }
    if (stagingWeight + waitTruck > weight) {
      queue[queue.length] = 0;
      continue;
    }
    stagingWeight = stagingWeight + waitTruck;
    queue[queue.length] = waitTruck;
    coord += 1;
  }
  return ans;
}
console.log(solution(2, 10, [7, 4, 5, 6]));

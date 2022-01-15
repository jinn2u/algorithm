function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  // 큐를 length만큼 채운다.
  let queue = new Array(bridge_length);
  queue.fill(0);
  while (queue.length > 0) {
    answer++;
    sum -= queue.shift();
    // 건너지 않은 트럭이 있다면
    if (truck_weights.length > 0) {
      // 가중치가 넘지 않는다면
      if (sum + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        sum += truck;
        queue.push(truck);
      } else {
        queue.push(0);
      }
    }
  }
  return answer;
}
console.log(solution(2, 10, [7, 4, 5, 6]));

# bubble sort

서로 인접한 두 원소를 비교합니다. 작은것은 왼쪽, 큰것은 오른쪽에 배치합니다.

이렇게 한다면 처음 비교를 끝까지 돌았을 떄 맨 뒤에 있는 수는 가장 큰 수입니다.

따라서 n.length-1만큼씩 길이를 줄여가며 비교합니다.

n-1 + n-2 ... + 1 번 비교를 하빈다. 따라서 (n-1 + 1)*n / 2 이므로 O(N^2)입니다.

최선 최악 평균모두 O(N^2)입니다.

역순 정렬을 할떄 모든 수를 교환해야하므로 가장 느립니다.

공간 복잡도는 O(N)이다.

안정 정렬이다.

```js
const arr = [7, 6, 2, 4, 3, 9, 1];
const sort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sort(arr));
```
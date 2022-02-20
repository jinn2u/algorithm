# mergeSort

병합 정렬은 데이터를 분할하는 단계와 다시 병합하는 단계로 나눌 수 있는데, 분할하는 단계는 시간복잡도에 포함되지 않는다.

병합단계에서 시간복잡도는 log₂n이다. 1/2씩  배열을 쪼갠다음 반복하기 때문이다.

그 다음 n번만큼 비교 연산을 하기 때문에 O(nlog₂n)가 시간복잡도이다.

최선 최악 모두 O(nlog₂n)가 시간 복잡도이다.

하지만 만약에 정렬할 데이터의 양이 많은 경우에는 그만큼 이동 횟수가 많아지므로 시간적인 낭비도 많아지게 된다.

in place알고리즘이 아니기 때문에 별도의 메모리 공간이 필요하다.

안정 정렬이다.

```js
const merge = (left, right) => {
  let leftIdx = 0;
  let rightIdx = 0;
  const result = [];
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx++]);
    } else {
      result.push(right[rightIdx++]);
    }
  }
  return result.concat(left.slice(leftIdx), right.slice(rightIdx));
};
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([1, 6, 3, 8, 10, 2]));


```
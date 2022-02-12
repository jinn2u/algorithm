function solution(arr) {
  const ans = [0, 0];
  recur(arr);

  function sliceArr(array, rowStart, colStart, depth) {
    return array
      .slice(rowStart, rowStart + depth)
      .map((el) => el.slice(colStart, colStart + depth));
  }
  function recur(array) {
    const len = array.length;
    if (len <= 1) {
      ans[array[0][0]] += 1;
      return;
    }

    const test = [...array].flat().reduce((acc, cur) => acc + cur, 0);
    if (test === 0 || test === len * len) {
      ans[array[0][0]] += 1;
      return;
    }
    recur(sliceArr(array, 0, 0, len / 2));
    recur(sliceArr(array, 0, len / 2, len / 2));
    recur(sliceArr(array, len / 2, 0, len / 2));
    recur(sliceArr(array, len / 2, len / 2, len / 2));
  }
  return ans;
}

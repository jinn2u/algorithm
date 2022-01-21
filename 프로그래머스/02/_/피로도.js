// 조합을 이용한 풀이
function solution(k, dungeons) {
  const perm = permutation(dungeons, dungeons.length);
  let ans = 0;
  perm.forEach((per) => {
    let hp = k;
    let count = 0;
    per.forEach((p) => {
      if (hp >= p[0]) {
        hp -= p[1];
        count += 1;
      }
    });
    if (count > ans) {
      ans = count;
    }
  });
  return ans;
}
function permutation(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = permutation(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
// dfs로 완전탐색 (시간이 훨씬 조금 걸린다.)
function solution(k, dungeons) {
  const len = dungeons.length;
  //모든 경우의 수를 확인하기 위한 배열
  const visited = new Array(len).fill(false);
  //클리어 횟수를 확인
  let clearCnt = 0;

  //모든 경우의 수를 확인하기 위한 재귀
  const dfs = (k, curCnt) => {
    //현재 클리어 횟수와 전의 클리어 횟수를 비교
    clearCnt = Math.max(curCnt, clearCnt);

    for (let i = 0; i < len; i++) {
      const [minK, useK] = dungeons[i];

      //현재 피로도보다 크고 확인한적이 없다면
      if (k >= minK && !visited[i]) {
        //확인, 피로도 감소 및 카운트 증가 후 재귀
        visited[i] = true;
        dfs(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);

  return clearCnt;
}

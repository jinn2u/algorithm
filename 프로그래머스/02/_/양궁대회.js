function solution(n, peachInfo) {
  let maxGap = 0;
  let ans = [];
  let lionInfo = new Array(11).fill(0);
  const peachArrow = n;
  bfs(0, lionInfo, 0, 10, 0);
  return !maxGap ? [-1] : ans;

  function bfs(peachSum, lionInfo, lionSum, idx, arrowCount) {
    //화살이 더 많으면 종료
    if (peachArrow < arrowCount) return;
    // 끝까지 왔다면 종료한다.
    if (idx < 0) {
      const gap = lionSum - peachSum;

      if (maxGap < gap) {
        maxGap = gap;
        // 화살이 남은것만큼 더해준다. 맨끝에 넣어주어야 우선순위가 제일 높다.
        lionInfo[10] += peachArrow - arrowCount;
        ans = lionInfo;
      }
      return;
    }
    // 어피치가 화살을 쏜게 있던 없던 라이언이 이겼을 경우는 상관이 없다.
    const cp_lionInfo = lionInfo.slice();
    cp_lionInfo[idx] = peachInfo[idx] + 1;
    bfs(
      peachSum,
      cp_lionInfo,
      lionSum + 10 - idx,
      idx - 1,
      arrowCount + peachInfo[idx] + 1
    );
    // 어피치 화살이 쏜게 있으면
    if (peachInfo[idx]) {
      // 어피치가 이겼을 경우 어피치는 점수를 획득한다.
      bfs(peachSum + 10 - idx, lionInfo, lionSum, idx - 1, arrowCount);
    } else {
      // 화살쏜게 없는데 어피치가 이겼을 경우에 점수는 안오른다.
      bfs(peachSum, lionInfo, lionSum, idx - 1, arrowCount);
    }
  }
}

console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));

let visit;
let answer;

const dfs = (tickets, start, res, cnt) => {
  // 시작경로를 넣는다.
  res.push(start);

  // 전부 순회했다면
  if (cnt === tickets.length) {
    answer = res;
    return true;
  }

  for (let i = 0; i < tickets.length; i++) {
    // 방문을 안했고, 티켓의 앞자리가 시작이라면
    if (!visit[i] && tickets[i][0] === start) {
      // 방문한걸로 친다.
      visit[i] = true;

      const result = dfs(tickets, tickets[i][1], res, cnt + 1);

      if (result) return true;

      visit[i] = false;
      res.pop();
    }
  }
  return false;
};

function solution(tickets) {
  tickets.sort();
  visit = new Array(tickets.length).fill(false);
  dfs(tickets, "ICN", [], 0);

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
    ["ICN", "ACK"],
  ]),
);

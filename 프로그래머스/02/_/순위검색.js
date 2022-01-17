let infoMap = {};
function solution(infos, queries) {
  let ans = [];
  createInfoMap(infos);
  sortInfoMap();
  for (const query of queries) {
    const splitted = query.replace(/ and /g, " ").split(" ");
    const score = Number(splitted.pop());
    const str = splitted.join("");
    const arr = infoMap[str];
    if (!arr) {
      ans.push(0);
    } else {
      let start = 0;
      let end = arr.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] < score) {
          start = mid + 1;
        } else if (arr[mid] >= score) {
          end = mid;
        }
      }
      ans.push(arr.length - start);
    }
  }
  return ans;
}

function combination(arr, score, start) {
  const str = arr.join("");
  infoMap[str]
    ? (infoMap[str][infoMap[str].length] = score)
    : (infoMap[str] = [score]);

  for (let i = start; i < arr.length; i += 1) {
    let tmp = arr.slice();
    tmp[i] = "-";
    combination(tmp, score, i + 1);
  }
}
function createInfoMap(infos) {
  for (const info of infos) {
    const splitted = info.split(" ");
    const score = Number(splitted.pop());
    combination(splitted, score, 0);
  }
}
function sortInfoMap() {
  for (const str in infoMap) {
    infoMap[str].sort((a, b) => a - b);
  }
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);

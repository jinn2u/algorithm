function solution(s) {
  const ans = [];
  let arr = [];
  let arrIdx = 0;
  let tmp = "";
  for (const ch of s) {
    if (Number.isInteger(+ch) || (ch === "," && tmp.length > 0)) {
      tmp += ch;
    } else if (ch === "}" && tmp.length > 0) {
      tmp = tmp.split(",").map(Number);
      arr.push(tmp);
      tmp = "";
    }
  }
  arr = arr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      ans.push(arr[i][0]);
    }
    for (let j = 0; j < arr[i].length; j += 1) {
      if (!ans.find((val) => val === arr[i][j])) {
        ans.push(arr[i][j]);
      }
    }
  }
  console.log(ans);
}

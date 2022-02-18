const createDic = (dic) => {
  for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i += 1) {
    const key = String.fromCharCode(i);
    const value = i - "A".charCodeAt() + 1;
    dic.set(key, value);
  }
};

const solution = (msg) => {
  const dic = new Map();
  const ans = [];
  let lastIdx = 26;
  createDic(dic);

  let word = "";
  msg.split("").reduce((acc, cur) => {
    word = acc + cur;
    // // 키가 있는 경우
    if (dic.has(word)) {
      return word;
    }
    // // 키가 없는 경우
    dic.set(word, ++lastIdx);
    ans.push(dic.get(acc));
    word = cur;
    return cur;
  }, "");
  ans.push(dic.get(word));
  return ans;
};

console.log(solution("KAKAO"));

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const setStr1 = separateStr(str1);
  const setStr2 = separateStr(str2);

  if (setStr1.length === 0 && setStr2.length === 0) return 65536;
  const tmpStr2 = [...setStr2];

  const intersectionLen = setStr1.filter((str) => {
    const idx = tmpStr2.findIndex((val) => val === str);
    if (idx === -1) return false;
    tmpStr2.splice(idx, 1);
    return true;
  }).length;

  const unionLen = setStr1.length + setStr2.length - intersectionLen;
  return Math.floor((intersectionLen / unionLen) * 65536);
}

function separateStr(str) {
  const set = [];
  for (let i = 0; i < str.length; i += 1) {
    if (
      "a".charCodeAt(0) <= str.charCodeAt(i) &&
      str.charCodeAt(i) <= "z".charCodeAt(0) &&
      "a".charCodeAt(0) <= str.charCodeAt(i + 1) &&
      str.charCodeAt(i + 1) <= "z".charCodeAt(0)
    ) {
      set.push(str.slice(i, i + 2));
    }
  }
  return set;
}
console.log(solution("A+C", "DEF"));

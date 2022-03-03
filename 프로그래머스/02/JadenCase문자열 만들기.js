const solution = (s) => {
  let res = "";
  let upper = false;
  for (const ch of s) {
    if (!res) res += ch.toUpperCase();
    else if (ch === " ") {
      res += ch;
      upper = true;
    } else if (upper) {
      res += ch.toUpperCase();
      upper = false;
    } else {
      res += ch.toLowerCase();
    }
  }
  return res;
};
console.log(solution("3people unFollowed me"));

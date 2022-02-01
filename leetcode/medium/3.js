var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let tmp = "";
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    const hasChIdx = tmp.indexOf(ch);
    if (hasChIdx > -1) {
      tmp = tmp.substring(hasChIdx + 1);
    }
    tmp += ch;
    maxLen = tmp.length > maxLen ? tmp.length : maxLen;
  }
  return maxLen;
};

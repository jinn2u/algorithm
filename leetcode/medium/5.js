var longestPalindrome = function (s) {
  let maxPal = "";

  for (let i = 0; i < s.length; i++) {
    bubble(i, i);
    bubble(i, i + 1);
  }

  function bubble(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;
    if (maxPal.length < right - left + 1) {
      maxPal = s.slice(left, right + 1);
    }
  }
  return maxPal;
};

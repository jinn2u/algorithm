const dict = new Map();
function solution(n, words) {
  for (let i = 0; i < words.length; i += 1) {
    const person = (i % n) + 1;
    const word = words[i];
    if (i === 0) {
      dict.set(word, true);
      continue;
    }
    const befWord = words[i - 1];
    if (word[0] !== befWord[befWord.length - 1]) {
      return [person, Math.ceil((i + 1) / n)];
    }
    if (dict.has(word)) {
      return [person, Math.ceil((i + 1) / n)];
    }
    dict.set(word, true);
  }
  return [0, 0];
}

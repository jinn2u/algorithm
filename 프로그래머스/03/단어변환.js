const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let visited = [];

function solution(begin, target, words) {
  visited = words.map((word) => [word, false]);

  return bfs(begin, target, words);
}

function bfs(begin, target, words) {
  const queue = [];
  queue.push([begin, 0]);

  while (queue.length) {
    const [word, count] = queue.shift();
    if (word === target) return count;

    for (let i = 0; i < word.length; i += 1) {
      for (let j = 0; j < lowerCase.length; j += 1) {
        let changeWord = Array.from(word);
        changeWord[i] = lowerCase[j];
        changeWord = changeWord.join("");

        const isValid = visited.findIndex(
          ([word, isVisited]) => word === changeWord && !isVisited
        );

        if (isValid !== -1) {
          queue.push([changeWord, count + 1]);
          visited[isValid][1] = true;
        }
      }
    }
  }
  return 0;
}

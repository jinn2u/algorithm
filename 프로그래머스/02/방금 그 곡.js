const KEY = {
  C: "A",
  "C#": "B",
  D: "C",
  "D#": "D",
  E: "E",
  F: "F",
  "F#": "G",
  G: "H",
  "G#": "I",
  A: "G",
  "A#": "k",
  B: "L",
};
const findMusicTime = (start, end) => {
  const [startM, startS] = start.split(":").map(Number);
  const [endM, endS] = end.split(":").map(Number);
  return (endM - startM) * 60 + endS - startS;
};
const createNewMelody = (musicTime, melody) => {
  let newMelody = "";
  for (let i = 0; i < musicTime; i += 1) {
    newMelody += melody[i % melody.length];
  }
  return newMelody;
};
const replace = (word) => {
  let newWord = "";
  for (let i = 0; i < word.length; i += 1) {
    const ch = word[i];
    const nextCh = word[i + 1];
    if (nextCh === "#") {
      newWord += KEY[ch + "#"];
      i += 1;
    } else {
      newWord += KEY[ch];
    }
  }
  return newWord;
};
const solution = (m, musicinfos) => {
  m = replace(m);
  const ans = [];
  musicinfos.forEach((musicinfo) => {
    const [start, end, name, melody] = musicinfo.split(",");
    const musicTime = findMusicTime(start, end);
    const replaceMelody = replace(melody);
    const newMelody = createNewMelody(musicTime, replaceMelody);

    if (newMelody.includes(m)) {
      const startTime = Number(start.split(":").join(""));
      ans.push([musicTime, startTime, name]);
    }
  });
  if (!ans.length) return "(None)";
  if (ans.length === 1) return ans[0][2];
  ans.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  return ans[0][2];
};

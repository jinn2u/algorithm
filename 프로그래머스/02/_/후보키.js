function solution(relation) {
  let column = relation[0].length;
  let row = relation.length;
  let count = 0;
  let bitMaskList = [];
  for (let i = 1; i < 1 << column; i += 1) {
    let keySet = new Set();
    for (let j = 0; j < row; j += 1) {
      let key = "";
      for (let k = 0; k < column; k += 1) {
        if ((i & (1 << k)) != 0) key += relation[j][k];
      }
      keySet.add(key);
    }
    if (keySet.size == row && duplcateCheck(bitMaskList, i)) count += 1;
  }

  return count;
}

function duplcateCheck(list, key) {
  let size = list.length;
  for (let i = 0; i < size; ++i) {
    if ((list[i] & key) == list[i]) return false;
  }
  list.push(key);
  return true;
}

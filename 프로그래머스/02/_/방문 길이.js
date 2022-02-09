function solution(dirs) {
  const moves = {
    // [x,y]
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let x = 0;
  let y = 0;
  const logs = [];

  for (let i = 0; i < dirs.length; i += 1) {
    let ch = dirs[i];
    const [dx, dy] = moves[ch];
    const nextX = x + dx;
    const nextY = y + dy;
    if (nextX === -6 || nextX === 6 || nextY === 6 || nextY === -6) continue;

    logs[logs.length] = "" + x + y + nextX + nextY;
    logs[logs.length] = "" + nextX + nextY + x + y;
    x = nextX;
    y = nextY;
  }

  return new Set(logs).size / 2;
}

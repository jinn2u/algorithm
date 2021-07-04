function solution(N, stages) {
  const res = []
  for (let j = 0; j < N; j++) {
    let tries = 0; let fail = 0;
    for (let i = 0; i < stages.length; i++) {
      if (stages[i] >= j + 1) {
        tries += 1
        if (stages[i] === j + 1) fail++
      }
    }
    res.push([fail / tries, j + 1])
  }
  res.sort((a, b) => {
    if (a[0] > b[0]) return -1
    else if (a[0] > b[1]) return 1
    else return a[1] - b[1]
  })
  return res.map(el => el[1])
}
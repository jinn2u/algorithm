function solution(s, n) {
  const res = []
  for (let i = 0; i < s.length; i++) {
    let tmp = s.charCodeAt(i)
    if (s[i] === ' ') res.push(' ')
    else if (tmp < 97) {
      res.push(String.fromCharCode(((tmp + n) - 65) % 26 + 65))
    } else {
      res.push(String.fromCharCode(((tmp + n) - 97) % 26 + 97))
    }
  }
  return res.join("")
}


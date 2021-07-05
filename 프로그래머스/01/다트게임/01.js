function solution(dart) {
  const tmp = []
  const number = []
  Array.from(dart).forEach((el, idx) => {
    if (el === "S") {
      tmp.push(parseInt(number.join("")))
      number.length = 0
    }
    else if (el === "D") {
      tmp.push(parseInt(number.join("") ** 2))
      number.length = 0
    }
    else if (el === "T") {
      tmp.push(parseInt(number.join("") ** 3))
      number.length = 0
    }
    else if (el === '*') {
      if (tmp.length > 1) {
        tmp[tmp.length - 1] *= 2
        tmp[tmp.length - 2] *= 2
      } else {
        tmp[tmp.length - 1] *= 2
      }
    } else if (el === "#") {
      tmp[tmp.length - 1] *= -1
    } else {
      number.push(el)
    }
  })
  return tmp.reduce((acc, cur) => acc + cur)
}
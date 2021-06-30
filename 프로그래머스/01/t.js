const a = [1,2,3]
const b = [2,4,5]
console.log(a.indexOf(b[0]))
console.log(a.splice(a.indexOf(b[0]),1))
console.log(a)
function solution(id) {
  const newId = id
      .toLowerCase() // 1
      .replace(/[^\w-.]/g, "") // 2
      .replace(/\.+/g, ".") // 3
      .replace(/^\.|\.$/g, "") // 4
      .padEnd(1, 'a') // 5
      .slice(0,15) // 6
      .replace(/\.$/g,"") // 7
  return newId.padEnd(3,newId[newId.length-1])
}
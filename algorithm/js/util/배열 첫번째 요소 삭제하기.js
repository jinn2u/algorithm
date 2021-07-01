// 삭제할 요소가 없으면 원본배열을 반환한다.
const arr = [1,2,3,4,5]

function removeFirstItem(array, item){
  const index = array.indexOf(item)
  if(index !== -1) array.splice(index,1)

  return array
}
console.log(removeFirstIdx(arr,2))
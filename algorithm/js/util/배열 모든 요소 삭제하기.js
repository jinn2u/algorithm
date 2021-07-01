const arr = [1,2,2,1,4,5]

function removeAll(array, item){
  return array.filter(el =>el !== item)
}
console.log(removeAll(arr, 2))
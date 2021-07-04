function solution(arr1, arr2) {
  return arr1.map((el1, idx1) => 
    el1.map((el2, idx2) => 
      el2 + arr2[idx1][idx2]
    )
  )
}
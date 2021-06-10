def solution(arr1, arr2):
  res = []
  for i in range(len(arr1)):
      mid = []
      for v1,v2 in zip(arr1[i],arr2[i]):
          mid.append(v1+v2)
      res.append(mid)
  return res
arr = list(map(int, input().split()))

while True:
  if arr == [1,2,3,4,5]:
    break
  else:
    for i in range(len(arr)):
      if arr[i] > arr[i+1]:
        arr[i], arr[i+1] = arr[i+1], arr[i]
        print(*arr)
N = int(input())
arr = []
for _ in range(N):
   arr.append(int(input()))
dasom = arr[0]
if len(arr)!=1:
      arr = sorted(arr[1:], reverse=True)


count = 0

if N!=1:
   while dasom<=arr[0]: 
      arr[0] -= 1
      dasom += 1
      count += 1
      arr = sorted(arr, reverse=True)
print(count)
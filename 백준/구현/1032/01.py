N = int(input())
arr = []
for _ in range(N):
  arr.append(input())

# print(arr)
ans = []
res = ''
for i in range(len(arr[0])):
  for j in range(len(arr)):
    ans.append(arr[j][i])
  if len(set(ans)) == 1:
    res += ans[0]
  else:
    res += '?'
  ans = []
print(res)
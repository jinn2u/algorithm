n,m = [list(map(int, input().split())) for _ in range(2)]

me, other = 0, 0
win = False
for v1, v2 in zip(n,m):
  me+=v1
  if me>other:
    win = True
    break
  other+=v2

# print(rev, me, other)
print('Yes') if win  else print('No')
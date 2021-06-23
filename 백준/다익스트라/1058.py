N = int(input())

board = [input() for _ in range(N)]
res = [[0]*N for _ in range(N)]

for k in range(N):
  for i in range(N):
    for j in range(len(board[i])):
      if i == j:
        continue
      if board[i][j]=='Y' or (board[i][k]=='Y' and board[j][k]=='Y'):
        res[i][j] = 1
a=0
for i in res:
  a = max(a,sum(i))
print(a)
from collections import deque
from itertools import chain
N,M = map(int, input().split())

boards = [input() for _ in range(N)]


count = 0
for board in boards:
  for i in board:
    std = '|'
    if std != i and i == '-':
        count+=1
    std = i
for i in range(M):
  std = '-'
  for j in range(N):
    if std=='-' and boards[i][j]=='|':
      count+=1
    std = boards[i][j]
print(count)
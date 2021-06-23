import sys
sys.setrecursionlimit(10 ** 5)
def dfs(x,y):
  if -1<x<len(choo) and -1<y<len(choo[0]) and not visited[x][y] and choo[x][y]:
    visited[x][y] = True
    dfs(x-1, y)
    dfs(x+1, y)
    dfs(x, y-1)
    dfs(x, y+1)
    return True
  return False


res = []
for _ in range(int(input())):
  x,y, g = map(int, input().split())
  choo = [[0]*y for _ in range(x)]
  visited = [[False]*y for _ in range(x)]
  count = 0
  for _ in range(g):
    a,b = map(int, input().split())
    choo[a][b] = 1
  for i in range(x):
    for j in range(y):
      if not visited[i][j] and dfs(i,j):
        count += 1
  res.append(count)
  
for i in res:
  print(i)
    
  
  
import sys
input = sys.stdin.readline
n,m = map(int,input().split())
block = [list(map(int, input().split())) for _ in range(int(input()))]
sx, sy = map(int,input().split())
move = list(map(int, input().split()))
nx = [-1,1,0,0]
ny = [0,0,-1,1]
visited = [[False]*m for _ in range(n)]

for i in block:
  visited[i[0]][i[1]] = True
# print(len(move))
  

visited[sx][sy] = True
z = 0
while True:
  z+=1
  for i in move:
    # 장애물이 없다면 계속 같은방향이다.
    while True :
      dx = sx + nx[i-1]
      dy = sy + ny[i-1]
      if dx<n and dx>-1 and dy<m and dy>-1 and not visited[dx][dy]:
        z = 0
        sx, sy = dx, dy
        visited[dx][dy] = True
      else:
        break 
  if z > len(move):
    break
print(sx,sy)
    
# 0 1
# 1 1

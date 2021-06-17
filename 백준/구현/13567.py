import sys
input = sys.stdin.readline
n,m = map(int, input().split())
# 동 북 서 남 순서
dx=[0,1,0,-1]
dy=[1,0,-1,0]
# 현재 보고 있는 방향: 동쪽
direction = 0
arr = [input().split()for _ in range(m)]
# 현재 위치
x,y = 0,0
def search_dir(data):
  global direction
  if data[1] == '0':
    direction = (direction+1)%4
    return dx[direction], dy[direction]
  else:
    direction = (direction+3)%4
    return dx[direction], dy[direction]
    
def solution(arr):
  global x,y
  dx,dy = 0,1
  for data in arr:
    if data[0] == 'MOVE':
      nx = x + int(data[1])*dx
      ny = y + int(data[1])*dy
      if nx<=n and nx>-1 and ny<=n and ny>-1:
        x,y = nx, ny
      else:
        print(-1)
        return
    else:
      dx,dy = search_dir(data)
  print(y,x)

solution(arr)

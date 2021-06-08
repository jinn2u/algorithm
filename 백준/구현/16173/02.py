from collections import deque
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[0]*N for _ in range(N)]
# 오른쪽, 아래쪽
dx = [0,1]
dy = [1,0]

def bfs(x,y):
  queue = deque()
  queue.append((x,y))
  while queue:
    x,y = queue.popleft()
    for i in range(2):
      nx = x + arr[x][y]*dx[i]
      ny = y + arr[x][y]*dy[i]
      if nx<N and ny<N and nx>=0 and ny>=0 and visited[nx][ny] == 0:
        if arr[nx][ny] == -1:
          return 'HaruHaru'
        else:
          visited[nx][ny] = 1
          queue.append((nx,ny))
  return 'Hing'

      

print(bfs(0,0))

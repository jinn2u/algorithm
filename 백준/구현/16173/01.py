from collections import deque
N = int(input())
arr= [list(map(int, input().split()))for _ in range(N)]  
visited = [[0]*N for _ in range(N)]
visited[0][0] = 1
def bfs(x,y):
  queue = deque()
  queue.append((x,y))
  while queue:
    x,y = queue.popleft()
    # print(x,y, "빠진것")
    # 오른쪽 이동
    dy = y + arr[x][y]
    dx = x 
    if dx<N and dy<N and dx>=0 and dy>=0 and visited[dx][dy]==0: 
      # print(dx,dy,"우측이동")
      if arr[dx][dy] == -1:
        return("HaruHaru")
      else:
        visited[dx][dy] = 1
        queue.append((dx,dy))
    # 아래쪽 이동
    dx = x + arr[x][y]
    dy = y 
    if dx<N and dy<N and dx>=0 and dy>=0 and visited[dx][dy]==0: 
      # print(dx,dy,"아래이동")
      if arr[dx][dy] == -1:
        return("HaruHaru")
      else:
        visited[dx][dy] = 1
        queue.append((dx,dy))
  return "Hing"
print(bfs(0,0))

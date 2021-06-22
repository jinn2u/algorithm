dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

N, K = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
S, X, Y = map(int, input().split())


def bfs():
  time = 0
  while virus:
    if time == S:
      return arr[X-1][Y-1]
    for idx in sorted(virus):
      qs, virus[idx] = virus[idx], []
      for x, y in qs:
        for i in range(4):
          nx, ny = x + dx[i], y + dy[i]
          if 0 <= nx < N and 0 <= ny < N and not arr[nx][ny]:
            arr[nx][ny] = idx
            virus[idx].append([nx, ny])
      if not virus[idx]:
        virus.pop(idx)
    time += 1
    if arr[X-1][Y-1]:
        return arr[X-1][Y-1]

if arr[X-1][Y-1]:
  print(arr[X-1][Y-1])
else:
  virus={}
  for i in range(N):
    for j in range(N):
      if arr[i][j]:
        if arr[i][j] not in virus:
          virus[arr[i][j]] = [[i,j]]
        else:
          virus[arr[i][j]].append([i,j])
  print(bfs())
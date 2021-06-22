from collections import deque
n, k = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
target_s, target_x, target_y = map(int, input().split())

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

v = []

for i in range(n):
    for j in range(n):
        if board[i][j] != 0:
            v.append([board[i][j], 0, i, j])

v.sort()
d = deque(v)

while d:
    v, cnt, x, y = d.popleft()
    if target_s == cnt:
        break
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<n and 0<=ny<n and not board[nx][ny]:
            board[nx][ny] = v
            d.append((v, cnt+1, nx, ny))

print(board[target_x-1][target_y-1])
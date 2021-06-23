from collections import deque

def dfs(arr, start, visited, road):
  # 방문을 하지 않은 경우
  if not visited[start]:
    road.append(start)
    visited[start] = True
    for i in arr[start]:
      dfs(arr, i, visited, road)

def bfs(arr, start, visited, road):
  Q = deque()
  Q.append(start)
  while Q:
    start = Q.popleft()
    if not visited[start]:
      road.append(start)
      visited[start] = True
      for i in arr[start]:
        Q.append(i)

d_visited = {}
b_visited = {}
arr = {}
d_road = []
b_road = []
v,e,start = map(int, input().split())
for i in range(e):
  a,b = map(int, input().split())
  arr.setdefault(a, []).append(b)
  arr.setdefault(b, []).append(a)
for i in arr:
  arr[i].sort()
  d_visited[i] = False
  b_visited[i] = False
  

dfs(arr, start, d_visited, d_road)
bfs(arr, start, b_visited,b_road)
for i in d_visited:
  if not d_visited[i]:
    dfs(arr,i,d_visited, d_road)

for i in d_visited:
  if not d_visited[i]:
    bfs(arr,i,b_visited, b_road)

for i in d_road:
  print(i, end=" ")
print()
for i in b_road:
  print(i, end=' ')

     
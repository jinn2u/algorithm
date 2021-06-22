# DFS

def DFS(graph, i, visited):
  print(i, end=' ')
  visited[i] = True
  for g_el in graph[i]:
    if not visited[g_el]:
      DFS(graph, g_el, visited)


graph = [
  [],
  [2,3,8],
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7]
]

visited = [False]*9

DFS(graph, 1, visited)

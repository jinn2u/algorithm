def solution(n, computers):
  answer = 0
  visited = [False]*n
  for i in range(n):
    if not visited[i]:
      dfs(n,visited,computers,i)
      answer+=1
  return answer
          
def dfs(n, visited, computers, k):
  visited[k] = True
  for i in range(n):
    if i != k and computers[k][i] == 1 and not visited[i]:
      dfs(n, visited, computers, i)
      
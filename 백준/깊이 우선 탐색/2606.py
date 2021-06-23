v = int(input())
e = int(input())
dic = {}
visited = []

def dfs(now, dic):
  for i in dic[now]:
    if i not in visited:
      visited.append(i)
      dfs(i, dic)


for i in range(1,v+1):
  dic[i] = []
for i in range(e):
  a,b = map(int, input().split())
  dic[a].append(b)
  dic[b].append(a)
dfs(1, dic)
print(len(visited)-1)

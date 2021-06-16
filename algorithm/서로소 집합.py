def find_parent(parent, x):
  # 노드의 부모가 자기 자신을 가리키는 것이 아니라면 종점에 다다른것이 아니다.
  if parent[x] != x:
    parent[x] = find_parent(parent, parent[x])
  return parent[x]

def union(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)
  if a>b:
    parent[a] = b
  else:
    parent[b] = a



# 노드와 간선의 수를 입력받는다.
v,e = map(int, input().split())
# 부모 노드를 자기자신으로 초기화 한다.
parent = [0]*(v+1)
for i in range(1,v+1):
  parent[i] = i
# 노드를 입력받고 union연산을 수행한다. 
for i in range(e):
  a,b = map(int,input().split())
  union(parent,a,b)

# 부모를 찾아준다. (루트노드가 나온다.)
for i in range(1,v+1):
  find_parent(parent,i)

for i in range(1,v+1):
  print('노드 {node}의 루트노드: {root}'.format(node=i, root = parent[i]))


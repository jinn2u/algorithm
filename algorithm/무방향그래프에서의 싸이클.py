def find_parent(parent, x):
  if parent[x] != x:
    return find_parent(parent, parent[x])
  return parent[x]

def union_parent(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)
  if a < b:
    parent[b] = a
  else:
    parent[a] = b

# 부모를 자기 자신으로 초기화한다.
v,e = map(int, input().split())
parent = [i for i in range(v+1)]

cycle = False 
for i in range(e):
  a,b = map(int, input().split())
  if find_parent(parent, a) == find_parent(parent, b):
    cycle = True
    break
  else:
    union_parent(parent, a, b)

print('cycle is exist') if cycle else print('cycle is not exist')
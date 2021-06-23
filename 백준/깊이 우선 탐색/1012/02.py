import sys

sys.setrecursionlimit(100000000)




def let(a,b):
  dx=[0,-1,0,1]
  dy=[1,0,-1,0]
  if -1<a<len(l) and -1<b<len(l[0]) and l[a][b]:
    l[a][b]=0
    for i in range(4): let(a+dx[i],b+dy[i])
    return True
  return False

for _ in range(int(input())):
  x,y,n=map(int,input().split())
  l=[[0]*y for j in range(x)]
  for i in range(n):
    a,b=map(int,input().split())
    l[a][b]=1
  count=0
  for i in range(x):
    for j in range(y):
      if let(i,j):
        count += 1
  print(count)


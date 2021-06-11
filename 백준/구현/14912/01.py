N,M = map(int, input().split())

count =0
for i in range(1,N+1):
  count += list(str(i)).count(str(M))
print(count)

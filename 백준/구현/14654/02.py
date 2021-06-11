N = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
res = []

def match(a,b):
  if a == b: return res[-1]*-1
  elif abs(a-b) == 1: 
    if a > b: return 1
    else: return -1  
  else: 
    if a > b: return -1
    else: return 1 

for i in range(N):
  res.append(match(a[i],b[i]))
res.append(0)
# print(res)
maxs = 0
streak = 1
for i in range(N):
  if res[i] != res[i+1]:
    maxs = max(maxs, streak)
    streak = 1
  else:
    streak += 1
print(maxs)

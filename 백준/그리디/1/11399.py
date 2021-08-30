import sys

n = int(sys.stdin.readline().rstrip())
arr = list(map(int, input().split()))

sum = 0

for k,v in enumerate(sorted(arr)):
   sum+= v*(n-k)
print(sum)


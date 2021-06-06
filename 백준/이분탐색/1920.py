import sys
arr1 = []
arr2 = []
arr1_len = int(input())
arr1 = list(map(int, sys.stdin.readline().rstrip().split()))
comp = {}
arr2_len = int(input())
arr2 = list(map(int, sys.stdin.readline().rstrip().split()))

# print(comp)
for i in arr1:
   comp[i] = 1

for i in arr2:
   if i not in comp:
      print(0)
   else:
      print(1)

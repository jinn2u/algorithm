import sys
int(input())
arr1 = list(map(int, sys.stdin.readline().rstrip().split()))
int(input())
arr2 = list(map(int, sys.stdin.readline().rstrip().split()))
dic = {}
for i in arr1:
   dic[i] = 1
for i in arr2:
   if i in dic:
      print(1, end=' ')
   else:
      print(0, end=' ')
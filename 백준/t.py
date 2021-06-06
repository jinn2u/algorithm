# a = [3,3,6]

# print(bisect.bisect_left(a,7,lo=0,hi=len(a))) # 3
# print(bisect.bisect_left(a,1,lo=0,hi=len(a))) # 0
# print(bisect.bisect_left(a,4,lo=0,hi=len(a))) # 2

# print(bisect.bisect_right(a,7,lo=0,hi=len(a))) # 3
# print(bisect.bisect_right(a,1,lo=0,hi=len(a))) # 0
# print(bisect.bisect_right(a,4,lo=0,hi=len(a))) # 2

import bisect
import sys


N = list(map(int, sys.stdin.readline().rstrip().split()))
arr1 = []
arr2 = []
for _ in range(N[0]):
   arr1.append(int(sys.stdin.readline().rstrip()))

for _ in range(N[1]):
   arr2.append(int(sys.stdin.readline().rstrip()))
arr1.sort()
print(arr1)
for i in arr2:
   # print(i)
   ans_idx = bisect.bisect_left(arr1,i,lo=0,hi=len(arr1))
   if len(arr1)<=ans_idx:
         print(-1)
   else:
      if arr1[ans_idx] != i:
         print(-1)
      else:
         print(ans_idx)















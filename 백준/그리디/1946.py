import sys
def solution(arr):
   ans = []
   for i in arr:
      i.sort(key = lambda x : (x[0]))
      end = i[0][1]
      count = 1
      for s,e in i:
         if end>e:
            count +=1
            end = e
      ans.append(count)
   return ans


n = int(sys.stdin.readline())
arr = []

for i in range(n):
   arr.append([])
   m = int(input())
   for _ in range(m):
      arr[-1].append(list(map(int, sys.stdin.readline().rstrip().split())))


for i in solution(arr):
   print(i)







print(arr)
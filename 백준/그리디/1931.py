n = int(input())
arr = []
for _ in range(n):
   arr.append(list(map(int, input().split())))
def solution(arr):
   ans = 0
   validate = 0
   arr.sort(key=lambda x: (x[1],x[0]))
   for start, end in arr:
      if validate < start:
         validate = end
         ans+=1
   return ans
   
print(solution(arr))
from itertools import combinations as cb

def solution(numbers):
   ans = []
   answer = list(cb(numbers, 2))
   for i in answer:
      ans.append(sum(i))
   return sorted(set(ans))
print(solution([2,1,3,4,1]))
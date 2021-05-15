from itertools import combinations as cb

def solution(d, budget):
   d.sort()
   while True:
      if sum(d) > budget:
         d.pop()
      else:
         return len(d)

print(solution([1,3,2,5,4],9))
print(solution([2,2,3,3],10))
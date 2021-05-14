from itertools import combinations 
def solution(nums):
   ans = 0
   cmb = list(combinations(nums,3))
   for i in cmb:
      prime = 0
      for j in range(2,(sum(i)//2)+1):
         if sum(i)%j == 0:
            prime+=1
      if prime == 0:
         ans+=1
   return(ans)

print(solution([1,2,3,4]))
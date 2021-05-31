def solution(n):
   ans = 0
   num = set(range(1,n+1))
   for i in range(1,n+1):
      if n %i == 0 and  i in num:
         num = num-set({i,n//i})
         # print(i, n//i)
         m = list(set({i,n//i}))
         ans= ans + sum(m)
         # print(ans, end=' ')
   return ans


print(solution(12))
# 약수의 갯수가 짝수이면 더한다.

from math import sqrt as sq

def solution(n1,n2):
   ans = 0
   for i in range(n1,n2+1):
      if sq(i) == int(sq(i)):
         ans -= i
      else:
         ans += i
   return ans

print(solution(13,17))
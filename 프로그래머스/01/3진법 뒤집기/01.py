def solution(n):
   return beten(bethree(n))

def bethree(n):
   a = list()
   while n//3 > 0:
      a.append(n%3)
      n //= 3
   a.append(n)
   return a

def beten(num):
   t = 0
   for i, n in zip(range(len(num)-1,-1,-1), num):
      t += 3**i*n
   return t

print(solution(45))
print(solution(125))
def solution(a, b):
   answer = 0
   a,b = min(a,b), max(a,b)
   return sum(range(a,b+1))

print(solution(3, 5))
print(solution(5, 3))

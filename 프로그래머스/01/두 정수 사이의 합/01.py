def solution(a, b):
   answer = 0
   a,b = min(a,b), max(a,b)
   for i in range(a,b+1):
      answer+=i
   return answer


print(solution(3, 5))
print(solution(5, 3))

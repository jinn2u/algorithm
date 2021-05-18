def solution(arr, divisor):
   answer = []
   for i in arr:
      if i % divisor==0:
         answer.append(i)
   return sorted(answer) or [-1]

print(solution([3,2,6], 10))
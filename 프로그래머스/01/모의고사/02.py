def solution(answers):
   correct = [0, 0, 0]
   first = [1,2,3,4,5]
   second = [2,1,2,3,2,4,2,5]
   third = [3,3,1,1,2,2,4,4,5,5] 
   answer = []
   for idx, ans in enumerate(answers):
      if first[idx%len(first)] == ans:
         correct[0] += 1
      if second[idx%len(second)] == ans:
         correct[1] += 1
      if third[idx%len(third)] == ans:
         correct[2] += 1
   for idx, i in enumerate(correct):
      if i == max(correct):
         answer.append(idx+1)
   return answer

# print(solution([1,2,3,4,5]))
print(solution([1,3,2,4,2]))
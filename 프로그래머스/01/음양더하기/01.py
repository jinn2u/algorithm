def solution(absolutes, signs):
   answer = 0
   for i,j in enumerate(absolutes):
         answer = answer+j if signs[i] else answer - j
   return answer


print(solution([4,7,12], [True, False, True]))
from collections import Counter
def solution(nums):
   n = len(nums)/2
   setNums = set(nums)
   answer = n if len(setNums)>n else len(setNums)
   return answer
print(solution([3, 1, 1,1, 2, 3]))
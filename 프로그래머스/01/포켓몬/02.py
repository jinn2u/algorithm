def solution(nums):
   return min(len(nums)/2, len(set(nums)))

print(solution([3, 1, 1,1, 2, 3]))

def solution(array, commands):
   answer = []
   for arr in commands:
      mid = []
      answer.append(sorted(array[arr[0]-1:arr[1]])[arr[2]-1])
   return answer

print(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
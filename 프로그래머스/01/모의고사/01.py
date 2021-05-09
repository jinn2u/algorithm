def solution(answers):
   correct = [0, 0, 0]
   people = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]] 
   answer = []
   # 정답 확인하기
   for i in range(len(answers)):
      for j in range(len(people)):
         if people[j][i%len(people[j])] == answers[i]:
            correct[j] += 1
   #가장 많이 맞은 사람 구하기
   for i in range(len(correct)):
      if correct[i] == max(correct):
         answer.append(i+1)
   return answer

# print(solution([1,2,3,4,5]))
print(solution([1,3,2,4,2]))
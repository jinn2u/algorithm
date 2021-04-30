# 둘이 정렬을 한다음에 비교를 할 때 값은 무조건 같아야 한다.
# 값이 다르다면 participant는 도착하지 못한것이다.
# 따라서 다르면 return한다.
# 값이 다 같다면 맨 마지막 값이 도착하지 못한것이다.
# 따라서 마지막 값을 return 한다.
def solution(participant, completion):
   participant.sort()
   completion.sort()

   for i,j in zip(participant, completion):
      if i !=j:
         return i
   return participant[-1]

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
print(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]))
print(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
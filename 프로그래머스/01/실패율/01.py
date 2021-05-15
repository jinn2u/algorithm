def solution(N,stages):
   ans = {}
   l = len(stages)
   for i in range(1, N+1):
      # 총 인원의 수, 클리어 하지 못한 사람의 수
      j = 0
      for v in stages:
         # 클리어 하지 못하면
         if i == v:
            j += 1
      if l == 0:
         ans[i] = 0
      else:
         ans[i] = j/l
         print(i,"단계", "떨어진 사람의 수", j, "총 인원수", l)
         l -= j
   return sorted(ans, key = lambda x: ans[x], reverse=True)
      
print(solution(5,[2,1,2,6,2,4,3,3]))
print(solution(4,[4,4,4,4,4]))

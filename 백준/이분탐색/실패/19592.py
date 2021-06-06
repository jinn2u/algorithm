# 예외모르겠음...
def solution(base, V):
   time = []
   for i in V:
      time.append(base[1]/i)
   time.sort()
   # 부스터를 안쓰고도 이긴다면
   if time[0] == base[1]/V[-1]:
      return 0
   lo, hi = 0,base[2]

   while lo<=hi:
      mid = (lo+hi)//2
      # print(lo, hi, mid, (base[1]-mid)/V[-1], time[0]-1)
      if (time[0]-1) == (base[1]-mid)/V[-1]:
         return int(mid+1) if (mid+1) <= base[-1] else -1
      elif (time[0]-1)> (base[1]-mid)/V[-1]:
         hi = mid -1
      elif (time[0]-1) < (base[1]-mid)/V[-1]:
         lo = mid+1
   return int(mid+1) if (base[1]-(mid+1))/V[-1]<time[0]-1 else -1


res = []
for i in range(int(input())):
   base = (list(map(float, input().split()))) # 인원수, 거리, 부스터 가능거리 입력
   V = (list(map(float,input().split()))) # 속도 입력
   res.append(solution(base,V))
for i in res:
   print(i)
# (base[1]-(mid-2))/V[1]
# print(base)
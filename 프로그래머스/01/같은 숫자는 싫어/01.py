def solution(arr):
   answer = []
   mid = []
   for i in arr:
      if len(mid) == 0:
         mid.append(i)
         print(mid)
      else:
         if i != mid[len(mid)-1]:
            answer.append(mid[0])
            mid.clear()
            print(mid)
            mid.append(i)
            print(mid)
         else:
            continue
   answer.append(mid[-1])

   return answer 
print(solution([1,1,3,3,0,1,1]))
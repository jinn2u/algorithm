def solution(n, lost, reserve):
   intersection = list(set(lost) & set(reserve))
   n = n-len(lost)+len(intersection)
   lost = list(set(lost)-set(intersection))
   reserve = list(set(reserve)-set(intersection))

   for i in lost:
      if i-1 in reserve:
         print(i-1)
         reserve.remove(i-1)
         n+=1
      elif i+1 in reserve:
         print(i+1)
         reserve.remove(i+1)
         n+=1
   return n


print(solution(5,[1, 2, 3],[2, 3, 4]))


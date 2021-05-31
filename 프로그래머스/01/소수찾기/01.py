def solution(n):
   arr = [0]*(n+1)
   ans = 0
   for i in range(2, n+1):
      if arr[i] == 1:
         pass
      else:
         j = i
         arr[j]=1
         ans+=1
         for i in range (2,n+1):
               if j*i > n:
                  break
               else:
                  arr[j*i] = 1
   return ans


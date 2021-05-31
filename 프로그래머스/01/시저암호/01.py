def solution(s, n):
   ans = ''
   for i in s:
      if ord(i) == 32:
         ans+= ' '   
      else:
         if ord(i) <= ord('Z'):   
               if ord(i)+n > ord('Z'):
                  ans += chr(ord('A')+ord(i)+n-ord('Z')-1)
               else:
                  ans+=chr(ord(i)+n)
         else:
               if ord(i)+n <= ord('z'):
                  ans+=chr(ord(i)+n)
               else:
                  ans += chr(ord('a')+ord(i)+n-ord('z')-1)
   return ans




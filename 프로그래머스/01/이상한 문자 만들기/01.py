def solution(s):
   result = ''
   c = 0 
   for i in s: 
      if i == ' ':
         c = 0
         result += ' '
      else:    
         if c%2 == 0:
               result += i.upper()
         elif c%2 == 1:
               result += i.lower()
         c+=1
   return result
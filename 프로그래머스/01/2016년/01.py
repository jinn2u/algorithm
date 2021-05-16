def solution(a,b):
   day = ['FRI', 'SAT','SUN', 'MON', 'TUE', 'WED', 'THU']
   date = {2:31, 3:29, 4: 31, 5: 30, 6: 31, 7:30, 8:31, 9: 31, 10: 30, 11: 31, 12: 30}
   d = 0
   if a != 1:
      for i in range(2,a+1):
         d += date[i]
   d+=b
   return day[(d%7)-1]

   
# print(solution(1,7)) 
print(solution(5,24)) 
print(solution(1,1))

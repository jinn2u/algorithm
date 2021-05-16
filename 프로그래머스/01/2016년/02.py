def solution(a,b):
   day = ['FRI', 'SAT','SUN', 'MON', 'TUE', 'WED', 'THU']
   date = [0, 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30] 
   return day[(sum(date[:a+1])+b -1)%7]



print(solution(5,24)) 
print(solution(1,1))
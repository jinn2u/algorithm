def solution(dartResult):
   pows = { "S":1,"D":2, "T":3 }
   mid = []
   num = ''
   i = 0
   for i in dartResult:
      if i in pows:
         mid.append(int(num)**pows[i])
         num = ''
      elif i in['*', '#']:
         j = len(mid)-1
         if i == '*':
            if j == 0:
               mid[j] = mid[j]*2
               num=''
            else:
               mid[j-1] = mid[j-1]*2
               mid[j] = mid[j]*2
               num=''
         else:
            mid[j] = mid[j]* -1
            num=''
      else:
         num+=i
   return sum(mid)

# print(solution("1S2D*3T"))
print(solution("1D2S#10S"))



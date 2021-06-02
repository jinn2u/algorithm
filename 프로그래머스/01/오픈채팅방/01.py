def solution(arr):
   ans = []
   user_info = {}
   for i in arr:
      if i.split()[0] == 'Enter' or i.split()[0] == 'Change':
         user_info[i.split()[1]] = i.split()[2]
   
   for i in arr:
      if i.split()[0] == 'Enter':
         ans.append("{}님이 들어왔습니다.".format(user_info[i.split()[1]]))
      if i.split()[0] == 'Leave':
         ans.append("{}님이 나갔습니다.".format(user_info[i.split()[1]]))
   
   return ans
import re
def solution(s):
   if len(s) not in[4,6]:
      return False
   else:
      try:
         int(s)
         return True
      except:
         return False
def solution(s):
   ans = []
   ans.extend(s)
   ans.sort(reverse=True)
   return ''.join(ans)

solution("Zbcdefg")
def solution(strings, num):
   ans = []
   for i in range(len(strings)):
      strings[i] = strings[i][num]+strings[i]
   strings.sort()
   for i in strings:
      ans.append(i[1:])
   return ans


print(solution(["abce", "abcd", "cdx"],2))
def solution(s):
  res = []
  for size in range(1,len(s)+1):
      splited = [s[i: i+size] for i in range(0, len(s), size)] 
      stack = [[splited[0],1]]
      for i in splited[1:]:
          if stack[-1][0] == i:
              stack[-1][1] += 1
          else:
              stack.append([i,1])
          
      compressed = ''
      compressed += ''.join([word if count == 1 else str(count)+word for word, count in stack])
      res.append(len(compressed))
  return min(res)

# print(solution('a'))
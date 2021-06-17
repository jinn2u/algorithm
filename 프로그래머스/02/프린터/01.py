def solution(pri, lo):
  res = 0
  while pri:
      now = pri.pop(0)
      # 더 중요도가 높은것이 있다면
      if pri and max(pri)>now:
          pri.append(now)
          #lo가 0이라면 맨끝으로 간다.
          if lo == 0: 
              # print(lo,'lo')
              lo = len(pri)-1
          #아닌경우 위치는 한칸 앞으로 간다.
          else: 
              # print(lo, 'lo')
              lo-=1
      # 중요도가 제일 높은 것이라면
      else:
          # 내가 선택한 것이 제일 중요한것이라면
          if lo == 0:   
              res+=1
              return res
          else:
              res+=1
              lo-=1
print(solution([2, 1, 3, 2],2))
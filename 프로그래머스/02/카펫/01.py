def yaksu(n):
  res = []
  for i in range(1, int(n**0.5)+1):
    if n%i==0:
      res.append(sorted([i,n//i]))
  return res

def solution(brown, yellow):
  mids = yaksu(yellow)
  for mid in mids:
    s = mid[0]*2+(mid[1]+2)*2
    if s==brown:
      return [mid[1]+2, mid[0]+2]
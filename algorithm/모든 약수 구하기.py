def yaksu(n):
  res = []
  for i in range(1, int(n**0.5)+1):
    if n%i==0:
      res.append(sorted([i,n//i]))
  return res
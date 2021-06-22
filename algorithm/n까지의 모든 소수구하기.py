def ger_prime(n):
  seive = [False, False] + [True] * (n - 1) 
  for k in range(2, int(n ** 0.5)+1): 
    if seive[k]: 
      seive[k*2::k] = [False] * ((n - k) // k)
      return [x for x in range(n+1) if seive[x]]
print(ger_prime(100))
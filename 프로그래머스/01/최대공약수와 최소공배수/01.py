def gcd(n,m):
  while n%m > 0:
    a = m
    m = n%m
    n = a
  return m

def solution(n, m):
    return [gcd(n,m), n*m//gcd(n,m)]
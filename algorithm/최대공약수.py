n,m = list(map(int, input().split()))

def gcd(n,m):
  while n%m > 0:
    a = m
    m = n%m
    n = a
  return m

print(gcd(n,m))
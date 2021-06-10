import sys
n,m = list(map(int, sys.stdin.readline().rstrip().split()))

def gcd(n,m):
  while n%m > 0:
    a = m
    m = n%m
    n = a
  return m

def lcm(n,m):
  return n*m//gcd(n,m)

print(gcd(n,m), lcm(n,m))
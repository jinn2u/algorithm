def gcd(n,m):
  while n%m>0:
    a = m
    m = n%m
    n = a
  print(m)
gcd(3,12)

# n,m = list(map(int, input().split()))

# def gcd(n,m):
#   while n%m > 0:
#     a = m
#     m = n%m
#     n = a
#   return m

# print(gcd(n,m))
def find_prime(n):
  if n == 1 or n == 0:
    return False
  count = 0
  for i in range(2,int(n**0.5) + 1):
    if n%i==0:
      count+=1
    if count>0:
      return False
  return True

print(find_prime(102))
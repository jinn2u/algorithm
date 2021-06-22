from itertools import permutations as pm


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


def solution(numbers):
  ans = []
  for i in range(1,len(numbers)+1):
    boards = set(pm(list(numbers), i))

    for board in boards:
      a = ''
      for j in board: a+=j
      a = int(a)
      if find_prime(a):
        ans.append(a)
  return len(set(ans))

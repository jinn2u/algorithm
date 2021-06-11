N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]

def solution(arr):
  if len(arr)<3:
    return "Woof-meow-tweet-squeek"
  for i in arr:
    if 5 in i or 2 in i:
      return "Woof-meow-tweet-squeek"
  return 'Wa-pa-pa-pa-pa-pa-pow!'
print(solution(arr))
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

def solution(arr):
  arr1 = sum(arr,[])
  arr += zip(*arr)
  # 중복되는 수가 있는지 확인
  if list(set(arr1)) != sorted(arr1): return 'FALSE'
  else:
    # 원소의 범위 확인
    for i in arr1:
      if i > N**2 or i<1: 
        return 'FALSE'
    # 행,열의 합  
    s =  N*(N**2+1)/2
    for i in arr:
      if sum(i) != s:
        return 'FALSE'
    # 대각선 검증
    down = 0
    up = 0
    for i in range(N):
      down += arr[i][i]
      up += arr[i][N-i-1]
    if up == down and up ==s:
      return 'TRUE'
    else:
      return 'FALSE'

print(solution(arr))
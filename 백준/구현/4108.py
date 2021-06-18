import sys
input = sys.stdin.readline

def near_bomb(arr,R,C):
  ans = [[0]*C for _ in range(R)]
  # 왼쪽 대각선부터 오른쪽 대각선까지
  dx = [-1,-1,-1,0,0,1,1,1]
  dy = [-1,0,1,-1,1,-1,0,1]
  for i in range(R):
    for j in range(C):
      if arr[i][j] != '*':
        count = 0
        for k in range(len(dx)):
          nx = i+dx[k]
          ny = j+dy[k]
          if nx>-1 and nx<len(arr) and ny>-1 and ny<len(arr[0]):
            if arr[nx][ny] == '*':
              count+=1
        ans[i][j] = count
      else:
        ans[i][j] = '*'
  return ans

while True:
  R,C = map(int, input().split())
  if (R,C) == (0,0):
    break
  else:
    arr = [list(input())for _ in range(R)] 
    res = near_bomb(arr, R, C)
    for i in range(R):
      for j in range(C):
        print(res[i][j], end='')
      print()
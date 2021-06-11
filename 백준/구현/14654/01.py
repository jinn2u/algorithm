N = int(input())
arr = [list(map(int, input().split()))for _ in range(2)]

m = 0
l_c = 0
r_c = 0

for i in range(N):
  res = abs(arr[0][i] - arr[1][i])
  # 절대값이 1이면 숫자가 큰쪽이 이긴다.
  if res == 1:
    if arr[0][i] < arr[1][i]:
      r_c += 1
      l_c = 0
    else:
      l_c += 1
      r_c = 0
  # 무승부인 경우
  elif res == 0:
    # 오른쪽이 새로 들어온선수이면 (왼쪽보다 이긴 카운트가 작다)
    if l_c>r_c:
      r_c+=1
      l_c = 0
    else:
      l_c += 1
      r_c = 0
  # 가위, 보 인경우 숫자가 작은게 이긴다.
  else:
    if arr[0][i] < arr[1][i]:
      l_c += 1
      r_c = 0
    else:
      r_c+=1
      l_c = 0
  m = max(m,l_c,r_c)




print(m)
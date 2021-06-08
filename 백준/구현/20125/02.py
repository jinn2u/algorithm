n = int(input())
arr = []
for _ in range(n):
  arr.append(input())

head_x = -1
head_y = -1

breaker = False
for i in range(n):
  for j in range(n):
    # 가장 첫번째 *이 머리이다..
    if arr[i][j] == '*' and head_x== -1:
      x = i+1
      y = j
      breaker = True
      break
  if breaker == True:
    break
print(x+1, y+1)

#왼쪽팔
l_arm = arr[x].count('*', 0,y)
print(l_arm, end=' ')

# 오른쪽 팔 = 팔의 전체행 - 왼쪽팔 - 심장
r_arm = arr[x].count('*')-l_arm-1
print(r_arm, end=' ')

#허리
center = 0
for i in range(x+1, n):
  center += int(arr[i][y]=='*')
print(center, end=' ')

# 다리
l_foot = 0
r_foot = 0
for i in range(x+1,n):
  l_foot += int(arr[i][y-1]=='*')
  r_foot += int(arr[i][y+1]=='*')

print(l_foot, end=' ')
print(r_foot, end=' ')




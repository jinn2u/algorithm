n = int(input())
arr = []
for _ in range(n):
  arr.append(input())

head_x = -1
head_y = -1
for i in range(n):
  for j in range(n):
    # 가장 첫번째 *이 머리이다..
    if arr[i][j] == '*' and head_x== -1:
      # print(i,j)
      # 머리는 아래에 심장이므로
      head_x = i+ 2
      head_y = j + 1
      break


res = []
count = 0
#왼팔 구하기
x,y = head_x-1, head_y-1
while y>0:
  y -=1
  if arr[x][y] == '*':
    count +=1
  else:
    break
res.append(count)
count = 0

# 오른팔 구하기
x,y = head_x-1, head_y-1
while y<n-1:
  y +=1
  if arr[x][y] == '*':
    count +=1
  else:
    break
res.append(count)
count = 0

# 허리
x,y = head_x-1, head_y-1
while x<n-1:
  x +=1
  if arr[x][y] == '*':
    count +=1
  else:
    break
res.append(count)
count = 0

# 왼다리
l_x,l_y = x-1, y-1
while l_x<n-1:
  l_x +=1
  if arr[l_x][l_y] == '*':
    count +=1
  else:
    break
res.append(count)
count = 0

# 왼다리
r_x,r_y = x-1, y+1
while r_x<n-1:
  r_x +=1
  if arr[r_x][r_y] == '*':
    count +=1
  else:
    break
res.append(count)
count = 0


print(head_x, head_y)
for i in res:
  print(i, end=' ')
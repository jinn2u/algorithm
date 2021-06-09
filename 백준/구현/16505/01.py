def star(arr, x, y, n):
  if n == 1:
    arr[x][y] = '*'
    return
  else:
    n//=2
    star(arr, x, y, n)
    star(arr, x+n, y, n)
    star(arr, x, y+n, n)

N = int(input())
arr = [[" "]*(2**N) for _ in range(2**N)]
star(arr, 0,0, 2**N)

count = len(arr)
for i in range(count):
  for j in range(count):
    print(arr[i][j],end='')
  count-=1
  print()

  
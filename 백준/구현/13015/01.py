n = int(input())

arr = [' ']*(2*n-1)

arr[0] = ('*'*n+' '*(2*(n-1)-1)+'*'*n)

for i in range(1, 2*n-2):
  if i < n-1:
    st =   ' '*i + '*'+' '*(n-2) + '*'+' '*(2*(n-i-1)-1)+ '*'+' '*(n-2)+'*'
    arr[i] = st
  elif i == n-1:
    st =   ' '*i + '*'+' '*(n-2) + '*' +' '*(n-2) +'*'
    arr[i] = st
  else:
    arr[i] = arr[2*n-2-i]

arr[-1] = ( '*'*n+' '*(2*(n-1)-1)+'*'*n)+ ' '*(n-1) 
for i in arr:
  print(i)
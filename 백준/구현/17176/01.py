_ = int(input())
secret = list(map(int, input().split()))
sent = input()

str = ''
for i in secret:
  if 0<i and i<27:
    str += chr(i+64)
  elif 26< i and i<53:
    str += chr(i+70)
  elif i ==0:
    str += chr(i+32)

print(['n','y'][sorted(str)==sorted(sent)])
  

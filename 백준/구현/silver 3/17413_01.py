Q = input()

go = False
stack = []
for i in Q:
  if i == '<': 
    if stack:
      for j in stack[::-1]: 
        print(j, end='')
      stack=[]
      print('<', end='')
      go=True
    else:
      go = True
      print(i, end='')
  elif i == '>':
    print(i, end='')
    go = False
  # < 다음에 오는 글자라면 뒤집지 않는다.
  elif go == True: 
    print(i, end='')
  elif i == ' ' and  not go:
    for j in stack[::-1]: 
      print(j, end='')
    print(' ',end='')
    stack=[]
  else:
    stack.append(i)

if stack:
  for i in stack[::-1]:
    print(i, end='')

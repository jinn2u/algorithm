def solution(x):
    str_x = str(x)
    s = 0
    for i in str_x:
      s+=int(i)
    if x%s == 0:
        return True
    else:
        return False
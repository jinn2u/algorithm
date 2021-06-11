

def solution(password): 
  # 종료 조건
  if password == 'end':
    return 
  set_pw = set(password)
  # 첫번째 조건
  if not first(set_pw):
    return "<{password}> is not acceptable.".format(password = password)
  # 두번쨰 조건
  if not second(password):
    return "<{password}> is not acceptable.".format(password = password)
  if not third(set_pw,password):
    return "<{password}> is not acceptable.".format(password = password)
  else:
    return "<{password}> is acceptable.".format(password = password)
     


# 모음이 반드시 하나 포함해야한다.
def first(set_pw):
  for i in set_pw:
    if i in 'aeiou':
      return True
  return False

# 자음 또는 모음이 3개 연속으로 오면 안된다.
def second(password):
  mo_c = 0
  ja_c = 0
  for i in password:
    if i in 'aeiou' and ja_c != 0:
      ja_c = 0
      mo_c += 1
    elif i in 'aeiou' and ja_c == 0:
      mo_c += 1
    elif i not in 'aeiou' and mo_c != 0:
      mo_c = 0
      ja_c += 1
    else:
      ja_c += 1
    if ja_c == 3 or mo_c == 3:
      return False
    
  return True
    

# 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
def third(set_pw, password):
  for i in set_pw:
    if i not in 'eo' and i*2 in password:
      return False
  return True

while True:
  res = solution(input())
  if not res: 
    break 
  else: 
    print(res)


sen = input()

def solution(sen):
  # __가 있다면 에러
  if '__' in sen:
    return 'Error!'
  # _과 대문자가 동시에 있다면 에러
  elif '_' in sen:
    if any(i.isupper() for i in sen):
      return 'Error!'
    # 처음 또는 끝에 _가 있다면 에러
    elif sen[-1] == '_' or sen[0] == '_':
      return'Error!'
    # 공백이 있다면 에러
    elif ' ' in sen:
        return'Error!'
    #아닌경우 출력한다.
    else:
      sen = list(sen)
      i = 0
      while True:
        if i >= len(sen):
          break
        elif sen[i] =='_':
          sen.pop(i)
          sen[i] = sen[i].upper()
        i+=1
      return ''.join(sen)
  # 자바형식일 경우
  elif any(i.isupper() for i in sen):
    sen = list(sen)
    i = 0
    # 첫 글자가 대문자라면 에러
    if sen[0].isupper():
      return 'Error!'
    # 공백이 있다면 에러
    elif ' ' in sen:
      return 'Error!'
    else:
      while True:
        if i >=len(sen):
          break
        else:
          if sen[i].isupper():
            tmp = sen[0:i]
            tmp.append('_')
            sen[i] = sen[i].lower()
            tmp.extend(sen[i:])
            sen = tmp
            i+=2
          else:
            i+=1
      return ''.join(sen)
  else:
    return ''.join(sen)
print(solution(sen))


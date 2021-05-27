def alpha_string46(s):
   import re
   return bool(re.match("^(\d{4}|\d{6})$", s))
# ^와 $는 문자열의 처음과 끝을 의미한다.
# \d는 숫자를 의미한다.
# {4}|{6}은 숫자가 4번 혹은 6번 반복되는 것을 찾는다.
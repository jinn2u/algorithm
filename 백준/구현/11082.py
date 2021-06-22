from math import gcd

n = input()

def non_div(mo, su):
  a = gcd(mo, su)

  mo//=a 
  su//=a
  return  mo, su

# 자연수인 경우
if '.' not in n:
  print('{n}/1'.format(n=n))
# 순환하지 않는 소수인 경우
elif '(' not in n and '.' in n:
  n1, n2 = n.split('.')
  mo = (10**len(n2))
  su = int(n1+n2)
  mo, su = non_div(mo, su)
  print('{su}/{mo}'.format(su=su,mo=mo))
#순환소수인 경우
else:
  n1,n2 = n.split('(')
  n1 = n1.replace('.','')
  n2 = n2.replace(')','')

  mo = 10**(n.find(')')- n.find('.')-2) - 10**(n.find('(')-n.find('.')-1)

  su = int(n1+n2) - int(n1)
  mo, su = non_div(mo,su)
  print('{su}/{mo}'.format(su=su,mo=mo))
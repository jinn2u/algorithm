num = input()
def solution(num):
   n= num.split('-')
   # print(n)
   s = sum(map(int, n[0].split('+')))
   for i in n[1:]:
      m = map(int, i.split('+'))
      s-=sum(m)
   return s
print(solution(num))
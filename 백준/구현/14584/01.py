sen = input()
n = int(input())
word = [input() for _ in range(n)]

def find_dic(sen, word):
  for i in word:
    if i in sen:
      return True
  return False


def solution(sen, word):
  for j in range(0,26):
    tmp = ''
    for i in sen:
      i = ord(i)+j
      # 123일 경우에는 a가 와야하므로 97에서 1을 뺀다
      i = chr(96+i-122) if i >122 else chr(i)
      tmp+=i
    if find_dic(tmp, word):
      return tmp

print(solution(sen,word))
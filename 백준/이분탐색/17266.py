import math
N = int(input())
M = int(input())
X = list(map(int, input().split()))

# 가로등이 하나일때
if len(X) == 1:
   # 5
   # 1
   # 5 인경우 
   if X[0] == N:
      print(X[0])
   else:
      # 5
      # 1
      # 1 인경우 양쪽 중 더 큰것을 출력한다.
      print(max((X[0]-0), (N-X[0])))
# 가로등이 하나 이상일떄 
else:
   arr = []
   # 제일 왼쪽에 있는것의 *2를 한다. 그 후 오른쪽 길이를 for문으로 돌린다.
   arr.append(X[0]*2)
   for k,v in enumerate(X):
      if k != len(X)-1:
         arr.append(X[k+1]-v)
      # 마지막 가로등의 경우 혼자 감당해야 하므로 *2를 해준다.  
      elif k ==len(X)-1:
         arr.append((N-v)*2)
   arr.sort(reverse=True)
   # print(arr)
   print(arr[0]//2 if arr[0]%2 == 0 else arr[0]//2 + 1)


# print(round(4.6))

# 테스트 케이스
# -----------------
# 5
# 1
# 5 
# -----------------
# 5
# 1
# 0
# ------------------
# 5
# 2
# 0 1
# -----------------
# 10
# 2
# 0 9
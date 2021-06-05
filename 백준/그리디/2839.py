n = int(input())

count = 0
res = 0
i = n//5
for j in range(i,-1, -1):
   if (n-(5*j))%3 == 0:
      res = j + (n-(5*j))//3
      break
if res == 0:
   print(-1)
else:
   print(res)

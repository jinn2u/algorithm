import sys
N = int(sys.stdin.readline().rstrip())

A = [0]
xor = 0
res = []
for _ in range(N):
  inp = sys.stdin.readline().rstrip()
  comp = int(inp[0])
  if comp ==1:
    A.append(int(inp[2]))
    xor ^=int(inp[2])
  elif comp == 2:
    A.remove(int(inp[2]))
    xor ^=int(inp[2])
  elif comp == 3:
    # res.append(sum(A))
    print(sum(A))
  else:
    # res.append(xor)
    print(xor)
# for i in res:
#   print(i)

      

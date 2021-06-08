N, _ = map(int,input().split())
m = [input() for _ in range(N)]
m += zip(*m)


comp = False
for k,v in enumerate(m):
  v = ''.join(v)
  if k<len(m)//2:
    if '#.#' in v : print('DOWN') if comp else print('UP')
    elif '##' in v: comp=True
  else:
    if '#.#' in v : print('LEFT') if comp else print('RIGHT')
    elif '##' in v: comp = False
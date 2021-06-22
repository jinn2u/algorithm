def solution(progresses, speeds):
  res = []
  for p, s in zip(progresses, speeds):
    if len(res)==0 or res[-1][0]< (-((p-100))//s):
      res.append([(-((p-100))//s), 1])
    else:
      res[-1][1] +=1
  return [q[1]for q in res]
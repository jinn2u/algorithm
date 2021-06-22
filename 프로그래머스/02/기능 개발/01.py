from collections import deque
def day(pr, sp):
  res =  (100-pr)//sp + 1 if (100-pr)%sp != 0 else (100-pr)//sp
  return res
def solution(progresses, speeds):
  pr_dq = deque(progresses)
  sp_dq = deque(speeds)
  res = []
  d1 = day(pr_dq.popleft(), sp_dq.popleft())
  res.append(1)
  while pr_dq:
      d2 = day(pr_dq.popleft(), sp_dq.popleft())
      if d1 >= d2:
          res[-1] += 1
      else:
          d1 = d2
          res.append(1)
          
  return res
  
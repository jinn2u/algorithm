from collections import deque

def solution(pri, lo):
  dq = deque((k,v) for k,v in enumerate(pri))
  answer = 0
  while dq:
    cur = dq.popleft()
    # 제일 앞에 있는것보다 큰 값이 큐에 하나라도 존재한다면 다시 큐에 삽입한다.
    if any(cur[1]<q[1] for q in dq):
      dq.append(cur)
    else:
      #아닐경우 삭제하므로 결과를 하나 증가한다.
      answer+=1
      if cur[0] == lo:
        return answer


print(solution([2, 1, 3, 2],2))
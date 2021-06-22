# 시간 복잡도는 O(V+E)이다. 위상 정렬을 수행할 때는 차례대로 모든 노드를 확인하면서 해당 노드에서 출발하는 간선을 차례대로 제더해야 한다.
# 아래에서는 싸이클이 없다고 생각하고 구현했지만, 싸이클이 존재하면 처리해주어야 한다.
import sys
from collections import deque
input = sys.stdin.readline







# 노드의 개수와 간선의 개수를 입력받기
v,e = map(int, input().split())
# 모든 노드에 대한 진입차수는 0으로 초기화
indegree = [0]*(v+1)
# 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트(그래프) 초기화
graph = [[]for i in range(v+1)]

# 방향 그래프의 모든 간선 정보를 입력받기
for _ in range(e):
  a,b = map(int, input().split())
  graph[a].append(b) # 정점 a에서 b로 이동가능
  indegree[b] += 1 # 진입차수를 1 증가

#  위상 정렬 함수
def topology_sort():
  result = [] # 알고리즘 수행 결과를 담을 리스트
  q = deque() # 큐 기능을 위한 deque 라이브러리 사용
  # 처음 시작할 때는 진입차수가 0인 노드를 큐에 삽입
  for i in range(1, v+1):
    if indegree[i] == 0:
      q.append(i)
  
  # 큐가 빌 떄까지 반복
  while q:
    # 큐에서 원소 꺼내기
    now = q.popleft()
    result.append(now)
    # 해당 원소와 연결된 노드들의 진입차수에서 1 빼기
    for i in graph[now]:
      indegree[i] -= 1
      # 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
      if indegree[i] == 0:
        q.append(i)

  # 위상 정렬을 수행한 결과 출력
  for i in result:
    print(i, end=' ')
  
topology_sort()

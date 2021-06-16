import heapq
import sys

INF = int(1e9)
input = sys.stdin.readline

n,m = map(int, input().split())
start = int(input())

# 각노드와 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
# 인덱스: 노드번호, (다음 노드, 비용)으로 저장
graph = [[]for i in range(n+1)]
distance = [INF]*(n+1)

#모든 간선 정보를 입력받기
for _ in range(m):
  a,b,c = map(int, input().split())
  graph[a].append((b,c))

def dijkstra(start):
  q = []
  # 시작 노드로 가기 위한 최단 경로는 0으로 설정하여 큐에 삽입
  heapq.heappush(q,(0, start))
  while q:
    # 가장 거리가 짧은 노드 출력
    dist, now = heapq.heappop(q)
    # 현재 노드가 이미 처리된적 있는 노드라면 무시
    if dist > distance[now]:
      continue
    # 현재 노드와 연결된 다른 입접한 노드들을 확인
    for i in graph[now]:
      cost = dist + i[1]
      #현재 노드를 거쳐서 다른 노드로 이동하는것이 더 짧은 경우
      if cost<distance[i[0]]:
        heapq.heappush(q, (cost, i[0]))

#입력
# 6 11
# 1
# 1 2 2
# 1 3 5
# 1 4 1
# 2 3 3
# 2 4 2
# 3 2 3
# 3 6 5
# 4 3 3
# 4 5 1
# 5 3 1
# 5 6 2
# 출력
# 0
# 2
# 3
# 1
# 2
# 4
def solution(n, lost, reserve):
   
    reserve = set(reserve)

    for size in [0, 1, -2]:
        lost = set(map(lambda x : x+size, lost))
        print(lost)
        reserve, lost = reserve - lost, lost - reserve

    return n - len(lost)
solution(5,[1, 2, 3],[2, 3, 4])
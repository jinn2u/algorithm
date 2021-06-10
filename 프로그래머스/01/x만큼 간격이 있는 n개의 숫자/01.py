def solution(x, n):
    ans = []
    a = x
    ans.append(x)
    for _ in range(n-1):
        ans.append(x+a) 
        x+=a
    return ans
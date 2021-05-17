def solution(dartResult):
    bonus = {'S':1, 'D':2, 'T':3}
    mid = []
    ans = 0
    for k,v in enumerate(dartResult):
        if v == '*':
            if k==2:
                ans+=bonus[mid.pop()]*int(mid.pop())*2
            else:
                ans+=bonus[mid.pop()]*int(mid.pop())*2+bonus[mid.pop()]*int(mid.pop())*2 
        else:
            mid.append(v)
    for _ in range(0,len(mid),2):
        f = bonus[mid.pop()]
        w = int(mid.pop())
        ans+= w**f
    return ans


               

print(solution('1D2S0T'))
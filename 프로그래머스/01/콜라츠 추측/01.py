def solution(num):
    answer = 0
    for i in range(0, 501):
        if num==1:
            return i
        else:
            if num%2==0:
                num//=2
            else:
                num = num*3 + 1
    return -1


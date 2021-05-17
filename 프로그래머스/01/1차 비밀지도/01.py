def solution(n, arr1, arr2):
    ans = []
    for i,j in zip(arr1,arr2):
        ans.append(bin(i | j)[2:])
    answer = []

    str_l = len(max(ans))
    for i in ans:
        str = " "*(str_l - len(i))
        for j in i:
            
            if j == '0':
                str += " "
            else:
                str += "#"
        answer.append(str)
    return answer


print(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]))
# print(solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]))
 #####

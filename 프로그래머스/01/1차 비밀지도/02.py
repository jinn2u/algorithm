def solution(n, arr1, arr2):
    ans = []
    for i,j in zip(arr1,arr2):
        str1 = str(bin(i | j)[2:])
        str1 = str1.rjust(n,'0').replace('1','#').replace('0',' ')
        ans.append(str1)
    return ans

print(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]))
print(solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]))
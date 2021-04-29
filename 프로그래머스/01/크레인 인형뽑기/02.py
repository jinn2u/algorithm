def solution(board, moves):
    basket = []
    result = 0
    for i in moves:
        for j in range(len(board)):
            if(board[j][i-1]>0):
                basket.append(board[j][i-1])
                if(len(basket)>1):
                    if(basket[-1]==basket[-2]):
                        basket.pop()
                        basket.pop()
                        result += 2
                break
    return result

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))

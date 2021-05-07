
def solution(numbers, hand):
   answer = []
   coor = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2]]
   left_lo = 10
   right_lo = 12
   if 0 in numbers:
      numbers[numbers.index(0)]=11
   for num in numbers:
      # 숫자가 1열에 있을경우 왼손 클릭
      if num in [1,4,7]:
         answer.append('L')
         left_lo = num
         # print("현재숫자:", num,"누른 손: L", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)
      # 숫자가 3열에 있을 경우 오른손 클릭
      elif num in [3, 6, 9]:
         answer.append('R')
         right_lo = num
         # print("현재숫자:", num,"누른 손: R", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)
      # 숫자가 2열에 있는 경우 
      else:
         # 왼손이 떨어져 있는거리
         l_count = abs(coor[left_lo-1][0]-coor[num-1][0])+abs(coor[left_lo-1][1]-coor[num-1][1])
         # 오른손이 떨어져 있는 거리
         r_count = abs(coor[right_lo-1][0]-coor[num-1][0])+abs(coor[right_lo-1][1]-coor[num-1][1])
         # 왼손이 더 가깝다면
         if l_count < r_count:
            answer.append('L')
            left_lo = num
            # print("현재숫자:", num,"누른 손: L", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)
         # 오른손이 더 가깝다면
         elif l_count > r_count:
            answer.append('R')
            right_lo = num
            # print("현재숫자:", num,"누른 손: R", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)   
         # 두 손이 같은 위치라면
         else:
            # 오른손잡이라면
            if hand[0] =='r':
               answer.append('R')
               right_lo = num
               # print("현재숫자:", num,"누른 손: R", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)   
            else:
               answer.append('L')
               left_lo = num
               # print("현재숫자:", num,"누른 손: L", "왼손 위치: ", left_lo, "오른손 위치: ", right_lo)
         
            
   return ''.join(answer)



# print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
print(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left"))
# LRLLLRLLRRL
# "LRLLRRLLLRR"
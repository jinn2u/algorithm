def solution(numbers, hand):
   answer = ''
   # 현재 손의 위치
   left_lo = '*'
   right_lo = '#'
   for n in numbers:
      # 3번쨰 열에 숫자가 있다면
      if n in [3,6,9]:
         answer += 'R'
         right_lo = n
         # print("오른손:",right_lo)
      # 1번째 열에 숫자가 있다면
      elif n in [1,4,7]:
         answer += 'L'
         left_lo = n
         # print("왼손:",left_lo)
      # 2번째 열에 숫자가 있다면
      else:
         left_dis = distance(left_lo, n)
         right_dis = distance(right_lo, n)
         # 오른손이 더 가깝다면
         if left_dis > right_dis:
            answer += 'R'
            right_lo = n
            # print("오른손:",right_lo)
         elif left_dis < right_dis:
            answer += 'L'
            left_lo = n
            # print("왼손:",left_lo)
         else:
            if hand == 'right':
               right_lo = n
               answer += 'R'
               # print("오른손:",right_lo)
            else:
               answer += 'L'
               left_lo = n
               # print("왼손:",left_lo)
   return answer;

def distance(hand, number):
   loc = {
      '1':(0,0), '2': (0,1), '3':(0,2), 
      '4':(1,0), '5':(1,1), '6':(1,2), 
      '7':(2,0), '8':(2,1), '9':(2,2), 
      '*':(3,0), '0':(3,1), '#':(3,2)
   }
   number,hand = str(number),str(hand)
   hand_x, hand_y = loc[hand]
   number_x, number_y = loc[number]
   return abs(number_x-hand_x)+abs(number_y-hand_y)

print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"))


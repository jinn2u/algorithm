def solution(lottos, win_nums):
   answer = []
   rate = {6:1, 5:2, 4:3, 3:4, 2:5}
   f_l = len(lottos)
   # 0 제거하기
   while 0 in lottos:
      lottos.remove(0)
   #0의 갯수 
   num_zero = f_l - len(lottos)
   # 틀린것 집합
   wrong = set(lottos) - set(win_nums)
   best = f_l - len(wrong)
   worst = f_l - (len(wrong) + num_zero)
   best = 6 if rate.get(best) == None else rate.get(best)
   worst = 6 if rate.get(worst) == None else rate.get(worst)
   answer.append(best)
   answer.append(worst)
   return answer
      



print(solution([44,1,0,0,31,25],[31,10,45,1,6,19]))
print(solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]))
print(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]))



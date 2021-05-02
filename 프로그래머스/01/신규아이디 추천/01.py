def solution(new_id):
   # 1단계
   new_id = new_id.lower()
   # 2단계  
   answer = ''
   for word in new_id:
      if word.isalnum() or word in '-_.':
         answer += word
   print("2단계", answer)
   # 3단계
   while '..' in answer:
      answer = answer.replace('..', '.')
   print("3단계", answer)
   # 4단계
   answer = answer[1:] if answer[0] == '.' else answer
   print("4-1단계", answer)
   answer = answer[:-1] if len(answer)>1 and answer[-1] == '.' else answer
   # 5단계
   if len(answer) == 0: 
      answer = 'a'
   # 6단계
   if len(answer) >= 16:
      answer = answer[:15]
      if answer[-1]=='.': answer = answer[:-1]
   if len(answer) < 3:
      answer += answer[-1]*(3-len(answer))         
   return(answer)



print(solution("...!@BaT#*..y.abcdefghijklm" ))
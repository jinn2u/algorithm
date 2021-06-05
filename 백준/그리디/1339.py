N = int(input())
word = []

for _ in range(N):
   word.append(input())
dic = {}

for i in range(len(word)):
   for j in range(len(word[i])):
      if word[i][j] not in dic:
         dic[word[i][j]] = pow(10, len(word[i])-j-1)
      else:
         dic[word[i][j]] += pow(10, len(word[i])-j-1)
sort_list = sorted(dic.items(), key=lambda x: x[1], reverse=True)

# print(sort_list)
result, num = 0,9

for k,v in sort_list:
   result += num*v
   num-=1

print(result)
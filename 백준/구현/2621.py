arr =[input().split() for _ in range(5)]

res = []
def first(arr):
  arr = sorted(arr, key=lambda x: x[1])
  for i in range(len(arr)-1):
    if arr[i][0] != arr[i+1][0] or (arr[i][1])+1 != arr[i+1][1]:
      return 0
  return sorted(arr, key=lambda x: x[1], reverse= True)[0][1]+900

def sec_thr_six_sev_eig(arr):
  tmp = [str(i[1])for i in arr] # 1 1 1 1 2
  count = 0
  if len(set(tmp)) == 2:
    for i in set(tmp):
      c = [''.join(tmp).count(i), i]
      if c[0]== 1:
        pass
      elif c[0] == 4:
        return 800+ int(c[1])
      elif c[0] == 3:
        count += (int(c[1]) * 10)
      else:
        count += int(c[1])+700
    return count if count != 0 else 0  
  elif len(set(tmp)) == 3:
    count=[]
    for i in set(tmp):
      c = [''.join(tmp).count(i), i]
      if c[0] == 3:
        return int(c[1]) + 400
      elif c[0] == 2:
        count.append(int(c[1]))
    return max(count)*10 + min(count)+300
  elif len(set(tmp)) ==4:
    for i in set(tmp):
      c = [''.join(tmp).count(i), i]
      if c[0] == 2:
        return int(c[1]) + 200
  return 0

def fourth(arr):
  tmp = [i[0] for i in arr]
  if len(set(tmp)) == 1:
    return sorted(arr, key=lambda x: x[1], reverse=True)[0][1] + 600
  return 0

def fifth(arr):
  arr = sorted(arr, key=lambda x: x[1])
  if all(arr[i][1]+1 ==arr[i+1][1] for i in range(len(arr)-1)):
    return arr[-1][1] + 500
  return 0




for i in arr:
  i[1] = int(i[1])
a = max(first(arr),sec_thr_six_sev_eig(arr), fourth(arr), fifth(arr))
print(sorted(arr, key=lambda x: x[1])[-1][1]+100 if a == 0 else a)
  
# a = [1,2,2,2]
# print([ str(i) for i in set(a)])
# print(a)

# 50
# 702
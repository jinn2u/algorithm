def binary_search(n,low, high):
   mid = 0
   while low <= high:
      mid = (low + high) // 2
      # print(mid)
      if mid**2 == n:
         return mid
      elif mid**2 > n:
         high = mid-1
      else:
         low = mid+1
   return mid+1 if mid**2 < n else mid

n = int(input())
low = 1
high = n

print(binary_search(n,low,high))



def strange_sort(strings, n):
   return sorted(strings, key=lambda str: (str[n], str))

strings = ["sun", "bed", "car"] 
print(strange_sort(strings, 1))
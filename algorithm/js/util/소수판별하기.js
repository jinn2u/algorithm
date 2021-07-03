function find_prime(num) {
  if (num === 0 || num === 1) return false
  else if (num === 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log(find_prime(14))

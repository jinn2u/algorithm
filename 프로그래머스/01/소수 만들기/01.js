function find_prime(num) {
  if (num === 0 || num === 1) return false
  else if (num === 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}
function solution(nums) {
    let answer = 0
    for(let i = 0; i<nums.length;i++){
        for(let j=i+1;j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let n = nums[i]+nums[j]+nums[k]
                if(find_prime(n)) answer++
            }
        }
    }
  return answer;
}
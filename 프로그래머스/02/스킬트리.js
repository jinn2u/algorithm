function solution(skill, skill_trees) {
  let ans = 0;
  for (const tree of skill_trees) {
    const skill_cp = Array.from(skill);
    let isValid = true;
    for (const ch of tree) {
      const index = skill_cp.findIndex((val) => val === ch);
      if (index !== -1 && index !== 0) {
        isValid = false;
        break;
      } else if (index === 0) {
        skill_cp.shift();
      }
    }
    isValid && (ans += 1);
  }
  return ans;
}

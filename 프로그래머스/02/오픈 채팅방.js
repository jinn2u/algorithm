const solution = (record) => {
  const nameLog = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  record.forEach((v) => {
    const [state, id, name] = v.split(" ");
    if (name) {
      nameLog[id] = name;
    }
    if (state !== "Change") {
      action.push([state, id]);
    }
  });
  return action.map(([state, id]) => nameLog[id] + stateMapping[state]);
};

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));

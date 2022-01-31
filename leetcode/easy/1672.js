var maximumWealth = function (accounts) {
  return accounts
    .map((account) => account.reduce((acc, cur) => acc + cur, 0))
    .sort((a, b) => b - a)[0];
};

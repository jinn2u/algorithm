const solution = (id_list, report, k) => {
  const log = {};
  const ans = {};
  id_list.forEach((id) => (ans[id] = 0));
  report = new Set(report);
  report.forEach((d) => {
    const [who, reported] = d.split(" ");
    log[reported] = log[reported] ? [...log[reported], who] : [who];
  });

  for (const v of Object.values(log)) {
    if (v.length >= k) {
      v.forEach((p) => {
        ans[p] += 1;
      });
    }
  }

  return Object.values(ans);
};

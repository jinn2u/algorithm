const solution = (sizes) => {
  const newSizes = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  const w = newSizes.map((v) => v[0]).sort((a, b) => b - a);
  const h = newSizes.map((v) => v[1]).sort((a, b) => b - a);
  return w[0] * h[0];
};
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

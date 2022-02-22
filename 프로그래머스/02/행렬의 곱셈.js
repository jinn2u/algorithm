const solution = (arr1, arr2) => {
  return arr1.map((row) =>
    arr2[0].map((_, arr2ColsLen) =>
      row.reduce(
        (acc, cur, arr1ColLen) => acc + cur * arr2[arr1ColLen][arr2ColsLen],
        0
      )
    )
  );
};

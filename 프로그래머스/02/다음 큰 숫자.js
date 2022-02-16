const solution = (n) => {
  const oneCount = (n) => {
    return n.toString(2).match(/1/g).length;
  };

  const len = oneCount(n);

  while (true) {
    n += 1;
    const tmp = oneCount(n);
    if (len === tmp) {
      return n;
    }
  }
};

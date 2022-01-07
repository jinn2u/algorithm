function solution(list) {
  return list.map((num) => {
    num = Array.from(num.toString(2));
    num.unshift("0");

    if (num[num.length - 1] === "0") {
      num[num.length - 1] = "1";
    } else {
      const idx =
        num.length -
        1 -
        (num
          .reverse()
          .findIndex((val, idx) => val === "1" && num[idx + 1] === "0") +
          1);
      num.reverse();
      num[idx] = "1";
      num[idx + 1] = "0";
    }
    return parseInt(num.join(""), 2);
  });
}

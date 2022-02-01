var addTwoNumbers = function (l1, l2) {
  const node = new ListNode();
  let tmpNode = node;
  let carry = 0;
  while (l1 || l2 || carry) {
    tmpNode.next = new ListNode();
    tmpNode = tmpNode.next;
    const left = l1 ? l1.val : 0;
    const right = l2 ? l2.val : 0;
    let sum = left + right + carry;
    const value = sum < 10 ? sum : sum % 10;
    carry = sum < 10 ? 0 : 1;
    tmpNode.val = value;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    console.log(l2, l1, carry);
  }
  return node.next;
};

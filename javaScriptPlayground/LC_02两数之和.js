/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const sum = []; // 结果位
  let n1 = ''; // 第一个数
  let n2 = ''; // 第二个数
  let carryBit = 0; // 是否进位
  let first = 0;
  for (; l1; l1 = l1.next) {
    n1 = `${n1}${l1.val}`;
  }
  for (; l2; l2 = l2.next) {
    n2 = `${n2}${l2.val}`;
  }

  first = parseInt(n1.substr(0, 1) || 0) + parseInt(n2.substr(0, 1) || 0);
  if (first > 9) {
    first %= 10;
    carryBit = 1;
  }
  sum.push(first);

  for (let i = 1; i < n1.length || i < n2.length || carryBit == 1; i++) {
    first = parseInt(n1.substr(i, 1) || 0) + parseInt(n2.substr(i, 1) || 0) + carryBit;
    if (first > 9) {
      first %= 10;
      carryBit = 1;
    } else {
      carryBit = 0;
    }
    sum.push(first);
  }
  const L = new ListNode(sum[0]);
  let temp = L;
  for (let i = 1; i < sum.length; i++) {
    temp.next = new ListNode(sum[i]);
    temp = temp.next;
  }
  //   let L = new ListNode(first);
  return L;
};

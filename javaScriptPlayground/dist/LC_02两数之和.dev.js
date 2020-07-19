"use strict";

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
var addTwoNumbers = function addTwoNumbers(l1, l2) {
  var sum = []; // 结果位

  var n1 = ''; // 第一个数

  var n2 = ''; // 第二个数

  var carryBit = 0; // 是否进位

  var first = 0;

  for (; l1; l1 = l1.next) {
    n1 = "".concat(n1).concat(l1.val);
  }

  for (; l2; l2 = l2.next) {
    n2 = "".concat(n2).concat(l2.val);
  }

  first = parseInt(n1.substr(0, 1) || 0) + parseInt(n2.substr(0, 1) || 0);

  if (first > 9) {
    first %= 10;
    carryBit = 1;
  }

  sum.push(first);

  for (var i = 1; i < n1.length || i < n2.length || carryBit == 1; i++) {
    first = parseInt(n1.substr(i, 1) || 0) + parseInt(n2.substr(i, 1) || 0) + carryBit;

    if (first > 9) {
      first %= 10;
      carryBit = 1;
    } else {
      carryBit = 0;
    }

    sum.push(first);
  }

  var L = new ListNode(sum[0]);
  var temp = L;

  for (var _i = 1; _i < sum.length; _i++) {
    temp.next = new ListNode(sum[_i]);
    temp = temp.next;
  } //   let L = new ListNode(first);


  return L;
};
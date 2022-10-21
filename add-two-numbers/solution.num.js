/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const num1Size = listSize(l1);
    const num2Size = listSize(l2);
    const diff = Math.abs(num1Size - num2Size);
    const max = Math.max(num1Size, num2Size);
    const norm1 = expand(l1, num1Size, max, diff);
    const norm2 = expand(l2, num2Size, max, diff);
    console.log(JSON.stringify(norm1), JSON.stringify(norm2), max, diff);
    return sum(max === num1Size ? norm1 : norm2, max === num1Size ? norm2 : norm1);
};

var listSize = function (l1, value) {
    if (!l1) {
        return 0;
    }
    if (!value) {
        value = 1;
    }
    return (!l1.next) ? 1 : value + listSize(l1.next, value++);
}

var sum = function (l1, l2, orig, one) {
    console.log(JSON.stringify(l1), JSON.stringify(l2), one);
    if (!orig) {
        orig = l1;
    }
    if (!l1) {
        return orig;
    }
    const result = l1.val + l2.val + (one ? 1 : 0);
    one = result >= 10;
    l1.val = one ? result - 10 : result;
    if (l2.next) {
        return sum(l1.next, l2.next, orig, one);
    } else {
        if (one) {
            l1.next = new ListNode(1, null);
        }
        return orig;
    }
}

var expand = function (l, numSize, max, diff) {
    if (numSize === max) {
        return l;
    }
    const tree = l;
    let current = l;
    while (current.next) {
        current = current.next;
    }
    for (let i = 0; i < diff; i++) {
        current.next = new ListNode(0, null);
        current = current.next;
    }
    return tree;
}
/*
const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
*/


const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));
console.log(JSON.stringify(addTwoNumbers(l1, l2)));


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
    const num1 = listToNum(l1, BigInt(1));
    const num2 = listToNum(l2, BigInt(1));
    console.log({num1, num2})
    return numToList(BigInt(num1 + num2));
};

var listToNum = function (l1, digit) {
    if (!l1) {
        return 0;
    }
    const value = BigInt(l1.val) * digit;
    return (!l1.next) ? value : value + listToNum(l1.next, BigInt(digit) * BigInt(10));
}

var numToList = function (num) {
    const n = BigInt(num);
    const numStr = n.toString();
    const reversedStr = reverseString(numStr);
    console.log({numStr, reversedStr});
    return numToListInner(BigInt(reversedStr), BigInt(Math.pow(10, numStr.length - 1)), null);
}

var reverseString = function (str) {
    return Array.from(str).reduce((val, acc) => acc + val, "");
}

var numToListInner = function (num, digit, list) {
    console.log(num, digit, list);
    if (!digit) {
        return list;
    }
    const value = Math.floor(Number(num / digit));
    console.log(value);
    if (!list) {
        list = new ListNode(value, numToListInner(BigInt(num % digit), BigInt(digit / 10n), list));
    }
    return list;
}

// console.log(reverseString('123'));
// console.log(numToList(123));
// console.log(addTwoNumbers(numToList(342), numToList(465)));
// 1000000000000000000000000000001
// 1000000000000000019884624838656
// 1435553554599799999999999999355n
// 9007199254740992

console.log(JSON.stringify(numToList(1000000000000000000000000000001n)));

// console.log(listToNum(addTwoNumbers(numToList(1000000000000000000000000000001n), numToList(465)), 1));

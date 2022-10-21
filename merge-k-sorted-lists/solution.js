/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

};


const l1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
const l3 = new ListNode(2, new ListNode(6, null));

console.log(JSON.stringify(mergeKLists([l1, l2, l3])));

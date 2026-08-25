/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode(0);
        let carry = 0;
        let curr = dummy;
        
        while (l1 || l2 || carry) {
            let l1val = l1 ? l1.val : 0;
            let l2val = l2 ? l2.val : 0;

            let sum = l1val + l2val + carry;
            carry = Math.floor(sum / 10);

            let digit = sum % 10;
            curr.next = new ListNode(digit);
            curr = curr.next; 
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}

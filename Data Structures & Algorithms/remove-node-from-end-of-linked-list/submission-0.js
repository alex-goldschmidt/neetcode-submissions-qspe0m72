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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head || !head.next) return null;
        head = this.reverse(head);
        if (n === 1) {
            head = head.next;
        } else {
            let temp = head;
            for (let i = 1; i < n - 1; i++) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
        }
        head = this.reverse(head);
        return head;
    }

    reverse(head) {
        let temp = head;
        let next = null;
        let prev = null;
        while (temp) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return prev;
    }
}

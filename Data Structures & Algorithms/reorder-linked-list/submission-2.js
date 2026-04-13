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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return undefined;

        let first = head;
        let secondHalfStart = this.findMiddle(head);
        let second = this.reverse(secondHalfStart);

        while (first && second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }

    reverse(head) {
        let temp = head;
        let prev = null;
        let next = null;

        while (temp) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return prev;
    }

    findMiddle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondHalfStart = slow.next;
        slow.next = null;
        return secondHalfStart;
    }
}

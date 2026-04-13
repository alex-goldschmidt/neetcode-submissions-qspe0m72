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

        let firstHalf = head;
        let secondHalfStart = this.findMiddleStart(head);
        let secondHalf = this.reverse(secondHalfStart);

        while (firstHalf && secondHalf) {
            let temp1 = firstHalf.next;
            let temp2 = secondHalf.next;

            firstHalf.next = secondHalf;
            secondHalf.next = temp1;

            firstHalf = temp1;
            secondHalf = temp2;
        }
    }

    findMiddleStart(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let secondHalf = slow.next;
        slow.next = null;
        return secondHalf;
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
}

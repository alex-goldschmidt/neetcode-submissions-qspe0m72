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
        if (!head || !head.next) return;

        const secondHalfStart = this.findMiddle(head);
        let first = head;
        let second = this.reverse(secondHalfStart);

        while (first && second) {
            const tmp1 = first.next;
            const tmp2 = second.next;

            first.next = second;

            if (tmp1) {
                second.next = tmp1;
            }

            first = tmp1;
            second = tmp2;
        }
    }

    findMiddle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const secondHalf = slow.next;
        slow.next = null;
        return secondHalf;
    }

    reverse(head) {
        let prev = null;
        let temp = head;
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


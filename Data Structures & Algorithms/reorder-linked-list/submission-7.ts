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
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return undefined;
        let firstHalf = head;
        let secondHalfStart = this.findSecondHalfStart(head);
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

    /**
     * @param {ListNode} head
     */
    reverse(head: ListNode) {
        let temp = head;
        let next = null;
        let pre = null;
        while (temp) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return pre;
    }

    /**
     * @param {ListNode} head
     */
    findSecondHalfStart(head: ListNode) {
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

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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        if (lists.length === 1) return lists[0] | null;

        let fullyMergedList = null;

        for (let i = 0; i < lists.length; i++) {
            const currentList = lists[i] || null;
            fullyMergedList = this.mergeTwoLists(fullyMergedList, currentList);
        }

        return fullyMergedList;
    }

/**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list2;
        if (!list1 && !list2) return null;

        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list2.next, list1);
            return list2;
        }
    }
}

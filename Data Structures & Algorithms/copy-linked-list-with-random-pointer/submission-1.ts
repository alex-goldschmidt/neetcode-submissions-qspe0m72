// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    map: Map<Node, Node>;
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;
        if (this.map.get(head)) {
            return this.map.get(head);
        }
        let copy = new Node(head.val);
        this.map.set(head, copy);
        copy.next = this.copyRandomList(head.next);
        copy.random = this.copyRandomList(head.random);

        return copy;
    }
}

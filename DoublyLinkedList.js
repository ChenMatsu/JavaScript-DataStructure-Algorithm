/**
 * @desc Previous and Next Pointers
 */
class Node {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @desc Adding new node to the **end** of the list
     * @param {*} value
     */
    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; // Point to the new tail
            newNode.prev = this.tail; // Point back to the old tail
            this.tail = newNode; // Change tail
        }
        this.length++;
        return this;
    }

    /**
     * @desc Removing node from the **end** of the list
     * @param {*} value
     */
    pop() {
        if (!this.head) return undefined;
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null; // Fully disconnect the link
        }
        this.length--;
        return removedNode;
    }

    /**
     * @desc Removing node from the **beginning** of the list
     */
    shift() {
        if (!this.length) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null; // Cut connection
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    /**
     * @desc Adding node to the **beginning** of the list
     * @param {} value
     */
    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * @desc Get a certain node in list
     * @param {*} index
     */
    get(index) {
        if (index < 0 || index >= this.length) return null;

        if (index < this.length / 2) {
            /**
             * @desc From Head
             */
            let targetNode = this.head;
            for (let i = 0; i <= this.length / 2; i++) {
                if (index === i) {
                    return targetNode;
                } else {
                    targetNode = targetNode.next;
                }
            }
        } else {
            /**
             * @desc From Tail
             */
            let targetNode = this.tail;
            for (let i = this.length - 1; i >= this.length / 2; i--) {
                if (index === i) {
                    return targetNode;
                } else {
                    targetNode = targetNode.prev;
                }
            }
        }
    }

    /**
     * @desc Reset a node
     * @param {*} index
     * @param {*} value
     * @returns
     */
    set(index, value) {
        const targetNode = this.get(index);
        if (targetNode) {
            targetNode.value = value;
            return true;
        }
        return false;
    }

    /**
     * @desc Insert a new node
     * @param {*} index
     * @param {*} value
     * @returns
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        switch (index) {
            case 0:
                this.unshift(value);
                break;
            case this.length:
                this.push(value);
                break;
            default:
                const newNode = new Node(value);
                const prevNode = this.get(index - 1);
                newNode.prev = prevNode;
                newNode.next = prevNode.next;
                prevNode.next = newNode;
                break;
        }
        this.length++;
        return true;
    }

    /**
     * @desc Remove a node
     * @param {*} index
     */
    remove(index) {
        if (index < 0 || index >= this.length) return false;

        switch (index) {
            case 0:
                this.shift();
                break;
            case this.length - 1:
                this.pop();
                break;
            default:
                const removedNode = this.get(index);
                removedNode.prev.next = removedNode.next;
                removedNode.next.prev = removedNode.prev;
                removedNode.next = null;
                removedNode.prev = null;
                break;
        }
        this.length--;
        return true;
    }
}
const list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.pop();
list.shift();
list.unshift(5000);
// console.log(list.get(0));
list.set(1, "CHANGED");
// console.log(list.get(1));
// console.log(list.get(2));
list.insert(1, "INSERT");
list.insert(0, "UNSHIFT");
list.remove(2);
console.log(list);

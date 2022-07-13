/**
 * @desc value indicates data
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @desc Assign new node to the list
     * @param {*} value
     */
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            /**
             * Point to the newNode, this has to come first before this.tail to prevent this.head point to null for the first time
             *
             */
            this.tail.next = newNode;
            /**
             * Change tail to newNode
             */
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift() {
        if (!this.length) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        return oldHead;
    }

    unshift(value) {
        const newHead = new Node(value);

        if (!this.length) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("Cool");
// list.pop();
// list.pop();
// list.pop();
list.shift();
console.log(list);
list.unshift("Amazing");
list.unshift("Programmer");
console.log(list);
// console.log(list);
// list.traverse();
// console.log(list.head);
// console.log(list.head.next);
// console.log(list.tail.next);

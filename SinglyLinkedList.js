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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let targetNode = this.head;
        while (index !== count++) {
            targetNode = targetNode.next;
        }
        return targetNode;
    }

    set(index, value) {
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.value = value;
            return targetNode;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        switch (index) {
            case 0:
                this.unshift(value); // !!this.unshift(value)
                break;
            case this.length:
                this.push(value);
                break;
            default:
                let insertedNode = new Node(value);
                let prevNode = this.get(index - 1);
                let prevNextNode = prevNode.next;
                prevNode.next = insertedNode;
                insertedNode.next = prevNextNode;
                this.length++;
                break;
        }
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        switch (index) {
            case 0:
                this.shift(); // !!this.unshift(value)
                break;
            case this.length - 1:
                this.pop();
                break;
            default:
                let prevNode = this.get(index - 1);
                let removedNode = prevNode.next;
                let prevDoubleNextNode = removedNode.next;
                prevNode.next = prevDoubleNextNode;
                this.length--;
                break;
        }
        return true;
    }

    reverse() {
        /**
         * Ex: [100, 200, 300]
         */

        /**
         * node => 100
         * this.head = 300
         * this.tail = 100
         */
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            /**
             * Step1:
             *      next = 200
             *      node.next = null
             *      prev = 100
             *      node = 200
             * Step2:
             *      next = 300
             *      node.next = null
             *      prev = 200
             *      node = 300
             * Step3:
             *      next = null
             *      node.next = null
             *      prev = 300
             *      node = null
             */
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
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
// console.log(list);
list.unshift("Amazing");
list.unshift("Programmer");
// console.log(list);
// console.log(list);
// list.traverse();
// console.log(list.head);
// console.log(list.head.next);
// console.log(list.tail.next);
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(4));
// console.log(list.set(3, "YOU ARE CHANGED!"));
// console.log(list.insert(2, "INSERTED"));
// console.log(list.insert(3, "INSERTED AGAIN"));
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(5));
// console.log(list.remove(3));
// console.log(list.remove(0));
// console.log(list.remove(0));
// console.log(list.remove(0));
// console.log(list);
list.reverse();
// console.log(list);
// console.log(list);

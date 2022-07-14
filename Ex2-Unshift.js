class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.head = null;   
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    
    unshift(value){
        const newHeadNode = new Node(value);
        
        if(!this.length) {
            this.head = newHeadNode;
            this.tail = this.head;
        } else {
            this.head.prev = newHeadNode;
            newHeadNode.next = this.head;
            this.head = newHeadNode;
        }
        this.length++;
        return this;
    }
}

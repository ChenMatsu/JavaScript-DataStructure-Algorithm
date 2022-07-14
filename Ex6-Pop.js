class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null
    }
    
    push(value){
        const newNode = new Node(value);
        if(!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop(){
        if(!this.length) return undefined;
        
        const removedTailNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        
        this.length--;
        return removedTailNode;
    }
}

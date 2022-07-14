class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let node = new Node(val);
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
    
    set(index, value){
        if(index < 0 || index > this.length ) return false;
        
        let targetNode;
        if(index <= this.length / 2) {
            targetNode = this.head;
            for(let i = 0; i <= this.length / 2; i++) {
                if(index === i) {
                    targetNode.val = value;
                    return true;
                } else {
                    targetNode = targetNode.next;
                }
            }   
        } else {
            for(let i = this.length - 1; i > this.length / 2; i--) {
                 targetNode = this.tail;
                if(index === i) {
                    targetNode.val = value;
                    return true;
                } else {
                    targetNode = targetNode.prev;
                }
            }   
        }
    }
}

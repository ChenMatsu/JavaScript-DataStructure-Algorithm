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
        this.tail = null;
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
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        let targetNode = this.head;
        
        for(let i = 0; i < this.length; i++) {
            if(index !== i) {
                targetNode = targetNode.next;
            } else {
                return targetNode;
            }
        }
        
    }
}

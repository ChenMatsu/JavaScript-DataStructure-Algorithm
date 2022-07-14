class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    
    unshift(value) {
        const newNode = new Node(value);
        if(!this.length) {
            this.head = newNode;
            this.tail = this.tail;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    insert(index, value){
        if(index < 0 || index >= this.length) return false;
        
        switch(index) {
            case 0:
                this.unshift(value);
                break;
            case this.length - 1:
                this.push(value);
                break;
            default:
                let insertedNode = new Node(value);
                let targetNode = this.head;
                for(let i = 0; i < this.length; i++) {
                    if(index !== i) {
                        targetNode = targetNode.next;
                        break;
                    } 
                }
                
                insertedNode.prev = targetNode;
                insertedNode.next = targetNode.next;
                targetNode.next = insertedNode;
                break;
        }
        this.length++;
        return true;
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        let targetNode = this.head;
        
        let i = 0;
        while(index !== i) {
            i++;
            targetNode = targetNode.next;
        }
        
        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;
        return targetNode;
    }
}
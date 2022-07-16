class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        // Step1: Check root
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        // Step2: Check right and left node existence
        while (true) {
            if (value === currentNode.value) return undefined;

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

        // if (this.compare(newNode, this.root)) {
        //     // Larger
        //     if (!this.root.left) {
        //         this.root.left = newNode;
        //     } else {
        //         let targetNode = this.root;
        //         while (targetNode.left) {
        //             if (this.compare(newNode, targetNode)) {
        //                 targetNode = targetNode.right;
        //             } else {
        //                 targetNode = targetNode.left;
        //             }
        //         }
        //         targetNode = newNode;
        //     }
        // } else {
        //     // Smaller
        //     if (!this.root.right) {
        //         this.root.right = newNode;
        //     } else {
        //         let targetNode = this.root;
        //         while (targetNode.right) {
        //             if (this.compare(newNode, targetNode)) {
        //                 targetNode = targetNode.left;
        //             } else {
        //                 targetNode = targetNode.right;
        //             }
        //         }
        //         targetNode = newNode;
        //     }
        // }
    }

    find(value) {
        if (!this.root) return null;

        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return currentNode;

            if (value < currentNode.value) {
                if (!currentNode.left) return null;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                if (!currentNode.right) return null;
                currentNode = currentNode.right;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(12);
tree.insert(21);
tree.insert(4);
tree.insert(37);
console.log(tree.find(21));

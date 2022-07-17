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

    DFSPreorder() {
        const visited = [];
        let currentNode = this.root;

        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(currentNode);
        return visited;
    }

    DFSInorder() {
        const visited = [];
        let currentNode = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(currentNode);
        return visited;
    }

    DFSPostorder() {
        const visited = [];
        let currentNode = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(currentNode);
        return visited;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(12);
tree.insert(21);
tree.insert(4);
tree.insert(37);
/**
 *     10
 *    9  12
 *  4      21
 *           37
 */
console.log(tree.find(21));
console.log(tree.DFSPreorder());
console.log(tree.DFSInorder());
console.log(tree.DFSPostorder());

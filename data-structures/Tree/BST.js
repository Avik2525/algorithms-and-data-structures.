import Queue from "../Queues.js";

class TreeNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BST {
    constructor(data = null) {
        if (data !== null) {
            this.root = new TreeNode(data);
        } else {
            this.root = null;
        }
    }

    insert_R(node, key) {
        if (node === null) {
            return new TreeNode(key);
        }
        if (key < node.data) {
            node.left = this.insert_R(node.left, key);
        }
        else if (key > node.data) {
            node.right = this.insert_R(node.right, key);
        }
        return node
    }

    insert_I(key) {
        let newNode = new TreeNode(key);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        let person = null;

        while (current !== null) {
            person = current;
            if (key < current) {
                current = current.left;
            }
            else if (key > current) {
                current = current.right;
            }
            return;
        }
        if (key > person.data) {
            person.left = newNode;
        }
        person.right = newNode;
    }

    add(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return
                }
                current = current.left;
            }
            else if (value > current.data) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                return;
            }
        }
    }

    contanis_R(node, key) {
        if (node.data === null) return true;

        if (k < node.data) {
            return this.contanis_R(node.left, key);
        }
        return this.contanis_R(node, right, key);
    }

    contanis_I(key) {
        let current = this.root;
        while (current !== null) {
            if (key === current.data) {
                return true;
            }
            else if (key < current.data) {
                current = current.left;
            }
            current = current.right;
        }
        return false;
    }

    levelOrder() {
        let result = [];
        let q = new Queue();

        if (this.root === null) return result;

        q.enqueue(this.root);

        while (!q.isEmpty()) {
            let node = q.dequeue();
            result.push(node.data);

            if (node.left !== null) q.enqueue(node.left);
            if (node.right !== null) q.enqueue(node.right);
        }
        return result;
    }

    printTree(node = this.root, space = 0, levelGap = 5) {
        if (node === null) return;

        space += levelGap;

        this.printTree(node.right, space);

        console.log(" ".repeat(space - levelGap) + node.data);

        this.printTree(node.left, space);
    }
}





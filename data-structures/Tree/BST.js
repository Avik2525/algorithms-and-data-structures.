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

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    insert(node, key) {
        this.root = this.insert_R(node, key)
    }

    contains(key) {
        return this.contains_R(this.root, key);
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
        const newData = new TreeNode(key);
        if(!this.root) {
            this.root = newData;
            return
        }
        let current = this.root;
        while(true) {
            if(key === current.data) return;
            if(key < current.data) {
                if(!current.left) {
                    current.left = newData;
                    return;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = newData;
                    return;
                }
                current = current.right;
            }
        }
    }

    contains_R(node, key) {
        if (node === null) return false;
        if (key === node.data) return true;

        if (key < node.data) {
            return this.contains_R(node.left, key);
        } else {
            return this.contains_R(node.right, key);
        }
    }

    contanis_I(key) {
        let current = this.root;
        while (current !== null) {
            if (key === current.data) {
                return true;
            }
            else if (key < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    _removeNode(node, key) {
        if (node === null) return null;

        if (key < node.data) {
            node.left = this._removeNode(node.left, key);
        }
        else if (key > node.data) {
            node.right = this._removeNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            else if (node.left === null) {
                return node.right;
            }
            else if (node.right === null) {
                return node.left;
            } else {
                let minNode = node.right;
                while (minNode.left !== null) {
                    minNode = minNode.left
                }
                node.data = minNode.data;
                node.right = this._removeNode(node.right, minNode.data);
            }
        }
        return node;
    }

    inOrder_R(node = this.root) {
        if (node === null) return;
        this.inOrder_R(node.left);
        console.log(node.data);
        this.inOrder_R(node.right);
    }

    inOrder_I() {
        let steck = [];
        let current = this.root;

        while (current !== null || steck.length > 0) {
            while (current !== null) {
                steck.push(current);
                current = current.left;
            }
            current = steck.pop();
            console.log(current.data);
            current = current.right;
        }
    }

    preOrder_R(node = this.root) {
        if (node === null) return;
        console.log(node.data);
        this.preOrder_R(node.left);
        this.preOrder_R(node.right);
    }

    preOrder_I() {
        if (this.root === null) return;
        let steck = [this.root];

        while (steck.length > 0) {
            let node = steck.pop();
            console.log(node.data);

            if (node.right !== null) {
                steck.push(node.right);
            }
            if (node.left !== null) {
                steck.push(node.left);
            }
        }
    }


    postOrder_R(node = this.root) {
        if (node === null) return;
        this.postOrder_R(node.left);
        this.postOrder_R(node.right);
        console.log(node.data);
    }

    postOrder_I() {
        if (this.root === null) return
        let s1 = [this.root];
        let s2 = [];

        while (s1.length > 0) {
            let node = s1.pop();
            s2.push(node);

            if (node.left !== null) {
                s1.push(node.left);
            }
            if (node.right !== null) {
                s1.push(node.right);
            }
        }
        while (s2.length > 0) {
            let node = s2.pop();
            console.log(node.data);
        }
    }

    getHeight(node = this.root) {
        if (node === null) return 0;

        let leftHeight = this.getHeight(node.left);
        let rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
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
        if (!node) return;

        space += levelGap;

        this.printTree(node.right, space);

        console.log(" ".repeat(space - levelGap) + node.data);

        this.printTree(node.left, space);
    }
}

const bst = new BST();




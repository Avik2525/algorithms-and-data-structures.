class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyList {
    constructor(iterables = null) {
        this.head = null;
        this.length = 0;

        if (iterables) {
            for (let i = 0; i < iterables.length; ++i) {
                this.push_back(iterables[i]);
            }
        }
    }

    push_back(elem) {
        if (!this.head) {
            this.head = new Node(elem);
            this.length++;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(elem);
        this.length++;
    }

    print() {
        let str = '';
        let current = this.head;

        while (current) {
            str += current.data + '->';
            current = current.next
        }
        str += null;
        console.log(str);
    }

    size() {
        return this.length;
    }

    isEmpty() {
        if (this.head === null || this.length === 0) {
            return true;
        }
        return false
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    front() {
        if (this.head === null) {
            throw new Error("No element");
        }
        return this.head.data;
    }

    push_front(elem) {
        let newNode = new Node(elem);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    pop_front() {
        if (this.head === null) {
            throw new Error("No element");
        }
        this.head = this.head.next;
        this.length--;
    }

    pop_back() {
        if (this.head === null) {
            throw new Error("No element")
        }

        if (this.head.next === null) {
            this.head = null;
            this.length = 0;
        }

        let current = this.head.next;
        let prev = this.head;

        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.length--;
    }

    at(index) {
        if (index < 0 || index > this.length) {
            throw new Error("Out of range");
        }
        let current = this.head;
        for (let i = 0; i < index; ++i) {
            current = current.next;
        }
        return current.data;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Out of range");
        }
        if (index === this.length) {
            this.push_back(value);
            return;
        }
        if (index === 0) {
            this.push_front(value);
            return;
        }
        let prev = this.head;

        for (let i = 0; i < index - 1; ++i) {
            prev = prev.next;
        }
        let newNode = new Node(value, prev.next);
        prev.next = newNode;
        this.length++;
    }

    erase(index) {
        if (index < 0 || index > this.length) {
            throw new Error("Out of range");
        }
        if (index === 0) {
            return this.pop_front();
        }
        if (index === this.length - 1) {
            return this.pop_back();
        }
        let prev = this.head;
        for (let i = 0; i < index - 1; ++i) {
            prev = prev.next;
        }
        let current = prev.next;
        prev.next = current.next;
        this.length--;
    }

    remove(value) {
        if (this.head === null) {
            throw new Error("No Element");
        }
        if (this.head.data === value) {
            return this.pop_front();
        }
        let current = this.head.next;
        let prev = this.head;

        while (current !== null) {
            if (current.data === value) {
                prev.next = current.next;
                this.length--;
            }
            prev = current;
            current = current.next;
        }
        return null;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    _merge(left, right) {
        if (!left) return right;
        if (!right) return left;

        let dummi = new Node(null);
        let current = dummi;

        while (left && right) {
            if (left.data <= right.data) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }
        if (right) {
            current.next = right;
        }
        if (left) {
            current.next = left;
        }
        return dummi.next;
    }

    sort() {
        this.head = this._merge_sort(this.head);
    }

    _merge_sort(head) {
        if(!head || !head.next) return head;

        let slow = head;
        let fast = head.next;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let mid = slow.next;
        slow.next = null;

        let left = this._merge_sort(head);
        let rigth = this._merge_sort(mid);

        return this._merge(left, rigth);
    }

    toArray() {
        const res = [];
        let current = this.head;
        while (current) {
            res.push(current.data);
            current = current.next;
        }
        return res;
    }

    static fromArray(arr) {
        let newNode = new SinglyList();
        for (let i = 0; i < arr.length; ++i) {
            newNode.push_back(arr[i]);
        }
        return newNode;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if(current) {
                    const value = head.data;
                    current = current.next;
                    return { value, done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
};

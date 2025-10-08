const MEGIC_NUMBERS = {
    ZERO: 0,
};

class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;
    #MEGIC_ZERO = 0;

    constructor(iterables) {
        if (iterables === undefined) return;

        if (iterables && typeof iterables[Symbol.iterator] !== 'function') {
            iterables = new Array(iterables);
        }
        for (const itme of iterables) {
            this.push_back(itme);
        }
    }

    size() {
        return this.#size
    }
    isEmpty() {
        return this.#size === this.#MEGIC_ZERO;
    }
    clear() {
        this.#head = this.#tail = null;
        this.#size = 0;
    }

    push_front(value) {
        const n = new Node(value);
        if (!this.#size) {
            this.#head = this.#tail = n;
        } else {
            n.next = this.#head;
            this.#head.prev = n;
        }
        this.#head = n;
        ++this.#size;
    }
    push_back(value) {
        const n = new Node(value);
        if (!this.#size) {
            this.#head = this.#tail = n;
        } else {
            n.prev = this.#tail;
            this.#tail.next = n;
            this.#tail = n;
        }
        ++this.#size;
    }

    pop_front() {
        if (!this.#size) {
            return null;
        }
        const n = this.#head.data;
        if (this.#size > 1) {
            this.#head = this.#head.next;
            this.#head.prev = null;
        } else {
            this.#head = this.#tail = null;
        }
        --this.#size;
        return n;
    }
    pop_back() {
        if (!this.#size) return null;

        if (this.#size === 1) {
            this.#head = this.#tail = null;
        } else {

            this.#tail = this.#tail.prev;
            this.#tail.next = null;
        }
        --this.#size;
    }

    front() {
        if (this.#head === null) {
            return null;
        } else {
            return this.#head.data;
        }
    }

    back() {
        if (this.#tail === null) {
            return null;
        } else {
            return this.#tail.data;
        }
    }

    at(index) {
        if (index < 0 || index >= this.#size) return null;

        let current = this.#head;
        for (let i = 0; i < index; ++i) {
            current = current.next;
        }
        return current.data;
    }

    insert(index, value) {
        if (index < 0 || index > this.#size) return null;

        const newNode = new Node(value);

        if (index === 0) {
            this.push_front(value);
            return;
        }

        if (index === this.#size) {
            this.push_back(value);
            return;
        }

        let current = this.#head;
        for (let i = 0; i < index; ++i) {
            current = current.next;
        }

        const prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = current;
        current.prev = newNode;

        this.#size++;
    }

    erase(index) {
        if (index < 0 || index >= this.#size) return null;

        if (index === 0) {
            this.pop_front();
            return;
        }

        if (index === this.#size - 1) {
            this.pop_back();
            return;
        }

        let current = this.#head;
        for (let i = 0; i < index; ++i) {
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#size--;
    }

    remove(value, equals = Object.is) {
        let current = this.#head;

        while (current) {
            if (equals(current.data, value)) {
                const prevNode = current.prev;
                const nextNode = current.next;

                if (prevNode) {
                    prevNode.next = nextNode;
                } else {
                    this.#head = nextNode;
                }

                if (nextNode) {
                    nextNode.prev = prevNode;
                } else {
                    this.#tail = prevNode;
                }
                this.#size--;
            }
            current = current.next;
        }
    }

    reverse() {
        let current = this.#head;
        let tmp = null;

        while (current) {
            tmp = current.prev;
            current.prev = current.next;
            current.next = tmp;

            current = current.prev;
        }

        if (tmp) {
            this.#tail = this.#head;
            this.#head = tmp.prev;
        }
    }

    sort() {
        this._sort();
    }

    _merge(left, right) {
        if (!left) return right;
        if (!right) return left;


        if (left.data <= right.data) {
            left.next = this._merge(left.next, right);
            if (left.next) {
                left.next.prev = left;
            }
            left.prev = null;
            return left;
        } else {
            right.next = this._merge(left, right.next);
            if (right.next) {
                right.next.prev = right;
            }
            right.prev = null;
            return right;
        }
    }

    _sort() {
        this.#head = this._merge_sort(this.#head);

        let tmp = this.#head;
        this.#tail = null;
        while (tmp) {
            this.#tail = tmp;
            tmp = tmp.next;
        }
    }

    _merge_sort(head) {
        if (!head || !head.next) return head;
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let mid = slow.next;
        slow.next = null;
        if (mid) {
            mid.prev = null;
        }

        let left = this._merge_sort(head);
        let right = this._merge_sort(mid);

        return this._merge(left, right);
    }

    print() {
        let current = this.#head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
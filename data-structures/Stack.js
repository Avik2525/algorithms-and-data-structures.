class Stack {
    constructor(cap) {
        this.capacity = cap;
        this.arr = new Array(this.capacity);
        this.size = 0;
    }

    push(elem) {
        if (this.isFully()) {
            throw new Error('Stakc are fully');
        }

        this.arr[this.size++] = elem;
    }

    pop() {
        if (this.size === 0) {
            throw new Error("No element");
        }
        let tmp = this.arr[this.size - 1];
        this.size--;
        return tmp;
    }

    peek() {
        if (this.size === 0) {
            throw new Error("No element");
        }
        return this.arr[this.size - 1];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFully() {
        return this.size === this.capacity;
    }

    _size() {
        return this.size;
    }
}
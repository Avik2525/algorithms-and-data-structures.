class Queue {
    constructor(cap) {
        this.capacity = cap;
        this.arr = new Array(this.capacity);
        this.size = 0;
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(elem) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        this.arr[this.rearIndex] = elem;
        this.rearIndex = (this.rearIndex + 1) % this.capacity;
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        } 
        let tmp = this.arr[this.frontIndex];
        this.frontIndex = (this.frontIndex + 1) % this.capacity;
        this.size--;
        return tmp;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.arr[this.frontIndex];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    _size() {
        return this.size;
    }
}

export default Queue;
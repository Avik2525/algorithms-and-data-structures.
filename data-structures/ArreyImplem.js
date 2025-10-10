class DArrey {
    #size = 0;
    #capacity = 0;
    #arr = null;
    #CapExponent = 2;

    constructor(cap) {
        this.#capacity = cap;
        this.#arr = new Uint32Array(cap);
    }
    resize(new_cap, fill = 0) {
        const tmp = new Uint32Array(new_cap,);

        for (let i = 0; i < this.#size; ++i) {
            tmp[i] = this.#arr[i];
        }

        for (let i = this.#size; i < new_cap; ++i) {
            tmp[i] = fill;
        }

        this.#capacity = new_cap;

        this.#arr = tmp;

    }

    push_back(elem) {
        if (this.#size === this.#capacity) {
            this.resize(this.#capacity * this.#CapExponent);
        }
        this.#arr[this.#size++] = elem;
    }

    at(index) {
        if (index < 0 || index >= this.#size) {
            throw new Error('Out of range');
        }
        return this.#arr[index];
    }

    erase(pos) {
        if(pos < 0 || pos >= this.#size) {
            throw new Error('!Out of range');
        }
        // const tmp = new Uint32Array(this.#capacity);
        // for (let i = 0; i < this.#size; ++i){
        //     if( i !== pos) {
        //         tmp[j++] = this.#arr[i];
        //     }
        // }
        // this.#arr = tmp;
        // this.#size--;

        for (let i = pos; i < this.#size - 1; ++i) {
            this.#arr[i] = this.#arr[i + 1];
        }
        this.#size--;
    }

    empty() {
        return this.#size === 0;
    }

    reserve(n) {
        if (n > this.#capacity) {
            this.resize(n, 0);
        }
    }

    shrinkToFit() {
        if (this.#capacity > this.#size) {
            this.resize(this.#size);
        }
    }

    clear() {
        this.#size = 0;
    }

    set(index, elem) {
        if (index < 0 || index >= this.#size) {
            throw new Error("Out of range");
        }
        this.#arr[index] = elem;
    }

    front() {
        if (this.#size === 0) {
            throw new Error('Out of range');
        }
        return this.#arr[0];
    }

    toArray() {
        let arr = [];
        for (let i = 0; i < this.#size; ++i) {
            arr[i] = this.#arr[i];
        }
        return arr;
    }

    popBack() {
        if (this.#size === 0) {
            throw new Error('Array os empty');
        }
        let elm = this.#arr[this.#size - 1];
        this.#size--;
        return elm;
    }

    insert(index, elem) {
        if (index < 0 || index > this.#size) {
            throw new Error('Out of range');

        } else if (this.#size === this.#capacity) {
            this.reserve(this.#capacity * this.#CapExponent);
        }
        
        for (let i = this.#size; i > index; --i) {
            this.#arr[i] = this.#arr[i - 1];
        }
        this.#arr[index] = elem;
        this.#size++;
    }

    swap(arr,i, j) {
        if(i < 0 || i > this.#size || j < 0 || j > this.#size) {
            throw new Error("Out of range");
        }
        let tmp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = tmp;
    }

    values() {
        let res = [];
        for (let i = 0; i < this.#size; ++i) {
            res.push(this.#arr[i]);
        }
        return res;
    }

    keys() {
        for (let i = 0; i < this.#size; ++i) {
            yield i;
        }
    }

    entris() {
        for (let i = 0; i < this.#size; ++i) {
            yield[i,this.#arr[i]];
        }
    }

    forEach(callback) {
        for (let i = 0; i < this.#size; ++i) {
            callback(this.#arr[i], i, this);
        }
    }

    map(callback) {
        let result = [];
        for (let i = 0; i < this.#size; ++i) {
            result.push(callback(this.#arr[i], i, this))
        }
        return result;
    }

    filter(callback) {
        let result = [];
        for (let i = 0; i < this.#size; ++i) {
            if(callback(this.#arr[i], i, this)) {
                result.push(this.#arr[i]);
            }
        }
        return result;
    }

    reduce(callback, elem) {
        let accumlator = elem;
        for (let i = 0; i < this.#size; ++i) {
            accumlator = callback(accumlator, this.#arr[i], i, this);
        }
        return accumlator;
    }

    Some(callback) {
        for (let i = 0; i < this.#size; ++i) {
            if(callback(this.#arr[i], i, this)) {
                return true;
            }
        }
        return false;
    }

    Every(callback) {
        for (let i = 0; i < this.#size; ++i) {
            if(!callback(this.#arr[i], i, this)) {
                return false;
            }
        }
        return true;
    }

    Find(callback) {
        for (let i = 0; i < this.#size; ++i) {
            if(callback(this.#arr[i], this, i)){
                return this.#arr[i];
            }
        }
        return undefined;
    }

    FindIndex(callback) {
        for (let i = 0; i < this.#size; ++i) {
            if(callback(this.#arr[i], i, this)) {
                return i
            }
        }
        return -1;
    }

    Includes(value) {
        for (let i = 0; i < this.#size; ++i) {
            if(this.#arr[i] === value) {
                return true;
            }
        } 
        return false;
    }
    
    [Symbol.iterator]() {
        const collection = this.#arr;
        let calculated_length = this.#size;
        let indxe = 0;
        return {
            next() {
                if (indxe < calculated_length) {
                    return {
                        value: collection[indxe++],
                        done: false
                    };
                }

                return { value: undefined, done: true }
            }
        }
    };
}




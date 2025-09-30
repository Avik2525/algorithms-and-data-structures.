function medianOfThree(arr, low, high) {
    const mid = Math.floor((low + high) / 2);
    const a = arr[low];
    const b = arr[mid];
    const c = arr[high];

    if ((a > b) !== (a > c)) return low;
    if ((b > a) !== (b > c)) return mid;
    return high;
}

const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const partition = (arr, low, high) => {
    const median = medianOfThree(arr, low, high);
    swap(arr, low, median);
    const pivot = arr[low];

    let i = low;
    let j = high;

    while (i < j) {
        do {
            i++
        } while (i < high && arr[i] <= pivot);

        do {
            j--
        } while (j > low && arr[j] > pivot);
        if (i >= j) {
            break;
        }
        swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
};

const quickSort = (arr, low, high) => {
    if (low < high) {
        const p = partition(arr, low, high);
        quickSort(arr, low, p);
        quickSort(arr, p + 1, high);
    }
};

const arr = [3, 6, 2, 8, 1, 5];

const medianIndex = medianOfThree(arr, 0, arr.length - 1);

console.log("median", medianIndex);


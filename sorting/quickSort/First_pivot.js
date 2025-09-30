const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const SortFirst = (arr, low, high) => {
    if(low < high) {
        const p = partition(arr, low, high);
        SortFirst(arr, low, p);
        SortFirst(arr, p + 1, high);
    }
};

const partition = (arr, low, high) => {
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

let arr = [10, 80, 30, 90, 40, 50, 70];
SortFirst(arr, 0, arr.length);
console.log("First ptvot", arr);
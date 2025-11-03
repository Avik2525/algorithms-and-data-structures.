const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const SortLast = (arr, lowe, right) => {
    if(lowe < right) {
        const p = partition(arr, lowe, right);
        quickSort(arr, lowe, p);
        quickSort(arr, p + 1, right);
    }
}

const partition = (arr, lowe, right) => {
    swap(arr, lowe, right - 1);
    const pivot = arr[lowe];

    let i = lowe;
    let j = right;

    while (i < j) {
        do {
            i++
        } while (i < right && arr[i] <= pivot);

        do {
            j--
        } while (j > lowe && arr[j] > pivot);
        if (i >= j) {
            break;
        }
        swap(arr, i, j);
    }
    swap(arr, lowe, j);
    return j;
};

const quickSort = (arr, lowe, right) => {
    if (lowe < right) {
        const p = partition(arr, lowe, right);
        quickSort(arr, lowe, p);
        quickSort(arr, p + 1, right);
    }
};

let arr = [10, 80, 30, 90, 40, 50, 70];
SortLast(arr, 0, arr.length);
console.log("Last pivot", arr);
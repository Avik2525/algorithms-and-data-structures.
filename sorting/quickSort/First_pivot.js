const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const SortFirst = (arr, lowe, rigth) => {
    if(lowe < rigth) {
        const p = partition(arr, lowe, rigth);
        SortFirst(arr, lowe, p);
        SortFirst(arr, p + 1, rigth);
    }
};

const partition = (arr, lowe, rigth) => {
    const pivot = arr[lowe];
    let i = lowe;
    let j = rigth;

    while (i < j) {
        do {
            i++
        } while (i < rigth && arr[i] <= pivot);

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

const quickSort = (arr, lowe, rigth) => {
    if (low < high) {
        const p = partition(arr, lowe, rigth);
        quickSort(arr, lowe, p);
        quickSort(arr, p + 1, rigth);
    }
};

let arr = [10, 80, 30, 90, 40, 50, 70];
SortFirst(arr, 0, arr.length);
console.log("First ptvot", arr);
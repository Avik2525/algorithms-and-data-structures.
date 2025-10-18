const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const randomPivot = (lowe, right) => {
    return lowe + Math.floor((Math.random() * (right - lowe + 1)));
};

const partition = (arr, lowe, right) => {
    const pivotIndex = randomPivot(lowe, right);
    swap(arr, lowe, pivotIndex);
    const pivot = arr[lowe];

    let i = lowe + 1;
    let j = right;

    while (true) {
        while (i <= right && arr[i] <= pivot) {
            i++
        }
        while (j >= lowe && arr[j] > pivot) {
            j--;
        }
        if (i >= j) {
            break;
        }
        swap(arr, j, i);
    }
    swap(arr, lowe, j);
    return j
};

const quickSort = (arr, lowe, right) => {
    if (lowe < right) {
        const p = partition(arr, lowe, right);
        quickSort(arr, lowe, p - 1);
        quickSort(arr, p + 1, right);
    }
};

let arr = [10, 80, 30, 90, 40, 50, 70];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted", arr);
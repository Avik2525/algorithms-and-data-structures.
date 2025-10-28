const medianOfThree = (arr, lowe, right) => {
    let mid = Math.floor((lowe + right) / 2);
    let a = arr[lowe];
    let b = arr[mid];
    let c = arr[right];

    if ((a > b) !== (a > c)) return lowe;
    if ((b > a) !== (b > c)) return mid;
    return right;
};

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (arr, lowe, right) => {
    const median = medianOfThree(arr, lowe, right);
    swap(arr, lowe, median);
    let pivot = arr[lowe];

    let i = lowe;
    let j = right + 1;

    while (true) {
        do {
            i++;
        } while (i <= right && arr[i] < pivot);

        do {
            j--;
        } while(arr[j] > pivot);
        
        if(i >= j) break;
        swap(arr, i, j);
    }
    swap(arr, lowe, j);
    return j;
};

const quickSort = (arr, lowe, right) => {
    if(lowe < right) {
        let p = partition(arr, lowe, right);
        quickSort(arr, lowe, p - 1);
        quickSort(arr, p + 1, right);
    }
};

const arr = [3, 6, 2, 8, 1, 5, 4, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr);


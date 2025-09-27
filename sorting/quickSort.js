const isSort = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < arr[i + 1]) {
      return true;
    } 
  }
  return false;
}

function medianofThree(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  const a = arr[low];
  const b = arr[mid];
  const c = arr[high - 1];

  if(a >= b && a <= c) {
    return mid;
  } else if(c >= a && c <= b) {
    return high;
  }
}

const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

function randomPivot(low, high) {
  return low + Math.floor((Math.random() * (high - low)));
}

const partition = (arr, low, high) => {
  const pivot = arr[low];
  const pivotIndex = randomPivot(low, high);
  const median = medianofThree(arr, low, high);
  let i = low;
  let j = high;

  while (i < j) {
    do {
      i++
    } while (i < high && arr[i] <= pivot);

    do {
      j--
    } while (j >= low && arr[j] > pivot);
    if (i < j) {
      swap(arr, i, j);
    }
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
quickSort(arr, 0, arr.length);
console.log(arr);
console.log("sortavorvac e", isSort(arr));
console.log("random", randomPivot(0, 8));
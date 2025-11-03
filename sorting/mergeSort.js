// Function to perform Merge Sort on an array, taking low and high indices
function mergeSort(arr, lowe, right) {
    // Base case: If low >= high, the subarray has 1 or 0 elements, so return
    if (lowe >= right) return;

    // Calculate the middle index of the current subarray
    let mid = Math.floor((lowe + right) / 2);

    // Recursively sort the left half of the subarray (from low to mid)
    mergeSort(arr, lowe, mid);
    // Recursively sort the right half of the subarray (from mid+1 to high)
    mergeSort(arr, mid + 1, right);
    // Merge the two sorted halves back into the original array
    merge(arr, lowe, mid, right);
}

// Function to merge two sorted subarrays into a single sorted array
function merge(arr, lowe, mid, right) {
    // Create a left subarray (from index low to mid)
    let a1 = arr.slice(lowe, mid + 1);
    // Create a right subarray (from index mid+1 to high)
    let a2 = arr.slice(mid + 1, right + 1);

    // Initialize pointers: i for left subarray, j for right subarray, k for main array
    let i = 0;
    let j = 0;
    let k = lowe;

    // Compare elements from both subarrays and merge them in sorted order
    while (i < a1.length && j < a2.length) {
        // If the element in the left subarray is smaller, place it in the main array
        if (a1[i] < a2[j]) {
            arr[k++] = a1[i++];
        } else {
            // Otherwise, place the element from the right subarray
            arr[k++] = a2[j++];
        }
    }

    // Copy any remaining elements from the left subarray (if any)
    while (i < a1.length) {
        arr[k++] = a1[i++];
    }

    // Copy any remaining elements from the right subarray (if any)
    while (j < a2.length) {
        arr[k++] = a2[j++];
    }
}

// Test the Merge Sort algorithm with an example array
let arr = [1, 4, 3, 10, 9, 2, 9];
// Call mergeSort on the entire array (indices 0 to length-1)
mergeSort(arr, 0, arr.length - 1);
// Print the sorted array
console.log(arr); // Output: [1, 2, 3, 4, 9, 9, 10]

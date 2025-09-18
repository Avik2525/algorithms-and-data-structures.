// Function to sort an array using the Selection Sort algorithm
function foo(arr) {
    // Store the length of the input array in 'size'
    let size = arr.length;

    // Outer loop iterates through the array from index 0 to size-2
    for (let i = 0; i < size - 1; ++i) {
        // Assume the current index 'i' has the minimum value
        let min = i;
        // Inner loop checks elements after index 'i' to find the smallest value
        for (let j = i + 1; j < size; ++j) {
            // If current element at index 'j' is smaller than element at 'min', update 'min'
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        // Swap the element at index 'i' with the smallest element found (at index 'min')
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    // Return the sorted array
    return arr;
}

// Test the function with an example array and print the sorted result
console.log(foo([64, 25, 12, 23, 11])); // Output: [11, 12, 23, 25, 64]
// Function to sort an array using the Counting Sort algorithm
function countingSort(arr) {
    // Store the length of the input array in 'size'
    let size = arr.length;

    // Find the minimum value in the array
    let min = Math.min(...arr);
    // Find the maximum value in the array
    let max = Math.max(...arr);

    // Calculate the range of values (max - min + 1) to size the count array
    let renge = (max - min) + 1;

    // Create a count array initialized with zeros, sized to the range of values
    let countArr = new Array(renge).fill(0);

    // Count the frequency of each value in the input array
    for (let i = 0; i < size; ++i) {
        // Increment the count for the value (arr[i] - min) in countArr
        countArr[arr[i] - min] += 1;
    }

    // Modify countArr to store cumulative sums (positions for sorted elements)
    for (let i = 1; i < renge; ++i) {
        countArr[i] += countArr[i - 1];
    }

    // Create a new array to store the sorted output, sized to match input array
    let newArr = new Array(size);

    // Place elements in their correct positions in the output array
    for (let i = size - 1; i >= 0; --i) {
        // Get the current element from the input array
        let elem = arr[i];
        // Calculate the index in the output array using the cumulative count
        let idx = countArr[elem - min] - 1;
        // Place the element in the output array at the calculated index
        newArr[idx] = elem;
        // Decrease the count for this element in countArr
        --countArr[elem - min];
    }

    // Return the sorted array
    return newArr;
}

// Test the function with an example array and print the sorted result
let zan = [20, 17, 20, 18, 20, 21];
console.log(countingSort(zan)); // Output: [17, 18, 20, 20, 20, 21]
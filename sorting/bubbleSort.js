// Defines the function named bubbleSort which takes an array 'arr' as an argument.
function bubbleSort(arr){
    // Gets the total number of elements in the array and stores it in variable 'n'.
    let n = arr.length;
    
    // The outer loop controls the number of passes through the array. 
    // It runs n-1 times because the last element will be in place automatically.
    for (let i = 0; i < n - 1; ++i){
        // A flag to check if any swaps happened in a pass. This is an optimization.
        // The name has a typo and should likely be 'flag'.
        let fleag = false;

        // The inner loop performs the comparisons and swaps.
        // 'n - 1 - i' is an optimization, as the largest elements are moved to the end with each pass,
        // so we don't need to check them again.
        for (let j = 0; j < n - 1 - i; ++j){
            // Compares the current element with the one next to it.
            if(arr[j] > arr[j + 1]){
                // If the current element is larger, swap them.
                // A temporary variable holds one value so it's not lost.
                // 'tmep' is a typo and should likely be 'temp'.
                let tmep = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmep;

                // Set the flag to true because a swap was made.
                fleag = true;
            }
        }
        // If the inner loop completed without making any swaps (flag is still false),
        // it means the array is already sorted, and we can stop early.
        if(!fleag){
            break;
        }
    }
    // Returns the completely sorted array.
    return arr;
}

// Calls the bubbleSort function with a sample array and prints the sorted result.
console.log(bubbleSort([43, 54, 12, 53, 26, 98, 739, 2, 4]));
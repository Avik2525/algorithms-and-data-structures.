// Defines a function 'foo' that takes an array 'arr' as input.
// This function sorts the array using the Insertion Sort algorithm.
function foo(arr){
    // Stores the total number of elements in the array in the variable 'n'.
    let n = arr.length;

    // This is the main loop that iterates through the array, starting from the second element (index 1).
    // The part of the array before index 'i' is considered the sorted subarray.
    for (let i = 1; i < n; ++i){
        // 'key' is the element at index 'i' that we want to place in its correct sorted position.
        // We store it in a variable so we don't lose it when we shift other elements.
        let key = arr[i];

        // 'j' is an index that will move backward from 'i' through the sorted subarray
        // to find the correct spot for the 'key'.
        let j = i;

        // This loop shifts elements in the sorted subarray to the right to make space for 'key'.
        // It continues as long as 'j' is greater than 0 and the element to the left of 'j' is larger than our 'key'.
        // Note: The condition 'j >= 0' could cause an error by trying to access arr[-1]. It should ideally be 'j > 0'.
        while(j > 0 && arr[j - 1] > key){
            // Shift the larger element (at j-1) one position to the right (to j).
            arr[j] = arr[j - 1];

            // Decrement 'j' to move one position to the left in the next iteration.
            j--;
        }

        // After the loop, 'j' marks the correct position for the 'key'.
        // We place 'key' into this "empty" spot.
        arr[j] = key;
    }

    // After the main loop is finished, the entire array is sorted.
    return arr;
}

// Defines a sample unsorted array of numbers.
let num = [5, 3, 4, 1,];

// Calls the sorting function with the sample array and prints the sorted result to the console.
console.log(foo(num));
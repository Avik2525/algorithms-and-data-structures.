function bubbleSort(arr){
    let n = arr.length;
    
    for (let i = 0; i < n - 1; ++i){
        let fleag = false;

        for (let j = 0; j < n - 1 - i; ++j){
            if(arr[j] > arr[j + 1]){
                let tmep = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmep;

                fleag = true;
            }
        }
        if(!fleag){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([43, 54, 12, 53, 26, 98, 739, 2, 4]));
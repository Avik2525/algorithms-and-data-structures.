function foo(arr){
    let n = arr.length;
    for (let i = 1; i < n; ++i){
        let key = arr[i];
        let j = i;


        while(j >= 0 && arr[j - 1] > key){
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = key;
    }
    return arr;
}

let num = [5, 3, 4, 1,];
console.log(foo(num));


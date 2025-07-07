function minOfArr(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minOfArr([324, -6, 32, 452, 2, 1]));

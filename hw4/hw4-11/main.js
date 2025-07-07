function indexSwap(arr, index1, index2) {
    let a = arr[index1];
    let b = arr[index2];
    arr[index1] = b;
    arr[index2] = a;
    return arr
}

console.log(indexSwap([11,22,33,44],0,1));
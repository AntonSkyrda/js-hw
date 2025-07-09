function sortArray(array, property) {
    if (property === "ascending") return array.sort((a, b) => a - b);
    if (property === "descending") return array.sort((a, b) => b - a);

    return "Incorrect input";
}

console.log(sortArray([3,11,21], "ascending"));
console.log(sortArray([3,11,21], "descending"));
console.log(sortArray([3,11,21], "qwe"));

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


[1, 2, 3].customForEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});

const numbers = [1, 2, 3, 4, 5];
const even = numbers.customFilter(num => num % 2 === 0);
console.log(even); // [2, 4]

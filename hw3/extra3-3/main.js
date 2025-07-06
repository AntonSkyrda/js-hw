let arr = [
    2,
    17,
    13,
    6,
    22,
    31,
    45,
    66,
    100,
    -18,
]

let i = 0

// loop while

while (i < arr.length) {
    console.log(arr[i])
    i++
}

// loop for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// loop while odd index

let j = 1

while (j < arr.length) {
    console.log(arr[j])
    j+=2
}

// loop while odd index

for (let i = 1; i < arr.length; i+=2) {
    console.log(arr[i])
}

// loop while even value

let k = 0

while (k < arr.length) {
    if (arr[k] % 2 === 0) {
        console.log(arr[k])
    }
    k++
}

// loop for even value

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// change array value

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = "okten"
    }
}

console.log(arr)

// reversed array

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}



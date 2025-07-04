let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");

if (firstNumber === secondNumber) {
    console.log("Equal");
} else if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
} else {
    console.log("Incorrect input");
}
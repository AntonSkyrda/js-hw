let inputNumber = +prompt("Enter a number in range 0 - 59");

if (inputNumber >= 0 && inputNumber <= 15) {
    console.log("First quoter");
} else if (inputNumber > 15 && inputNumber <= 30) {
    console.log("Second quoter");
} else if (inputNumber > 30 && inputNumber <= 45) {
    console.log("Third quoter");
} else if (inputNumber > 45 && inputNumber <= 59) {
    console.log("Fourth quoter");
} else {
    console.log("Incorrect input");
}

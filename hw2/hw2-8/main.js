let dayOfMonth = +prompt("Enter a number from 1 to 31")

if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    console.log("First");
} else if (dayOfMonth > 10 && dayOfMonth <= 20) {
    console.log("Second");
} else if (dayOfMonth > 20 && dayOfMonth <= 31) {
    console.log("Third");
} else {
    console.log("Incorrect input");
}

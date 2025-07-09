let str = "Ревуть воли як ясла повні";
let notStr = 123;

const stringToArray = (str) => str === typeof(str)  ? str.split(" ") : `"${str} is not string"`;

console.log(stringToArray(str));
console.log(stringToArray(notStr));

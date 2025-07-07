function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
    return `Incorrect values of ${exchangeCurrency} not in currencyValues`;
}

console.log(exchange(10000,[{currency:"USD",value:25},{currency:"EUR",value:42}],"USD"));
console.log(exchange(10000,[{currency:"USD",value:25},{currency:"EUR",value:42}],"EUR"));
console.log(exchange(10000,[{currency:"EUR",value:42}],"USD"));
console.log(exchange(10000,["qwe"],"USD"));
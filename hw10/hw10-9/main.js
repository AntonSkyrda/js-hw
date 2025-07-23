let balance = JSON.parse(localStorage.getItem("balance")) || 100;
const lastReload = JSON.parse(localStorage.getItem("lastReload")) || 0;
const uahValue = document.getElementById("value");
const now = Date.now();

if (now - lastReload > 10000) {
    balance += 10
}

console.log(uahValue);
console.log(balance)

uahValue.innerText = balance;

localStorage.setItem("balance", JSON.stringify(balance));
localStorage.setItem("lastReload", JSON.stringify(now));
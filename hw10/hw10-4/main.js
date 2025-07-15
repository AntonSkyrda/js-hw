let storageNumber = +localStorage.getItem("number");
storageNumber ++
localStorage.setItem("number", storageNumber)

document.getElementById("divNumber").innerText = storageNumber;

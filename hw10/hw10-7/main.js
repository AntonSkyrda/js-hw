function addToLocalStorage(arrayName, objToAdd) {
    const lstItem = localStorage.getItem(arrayName);

    if (!lstItem) {
        throw new Error("Array not in localStorage");
    }

    const arr = JSON.parse(lstItem);

    if (typeof objToAdd === "object") {
        arr.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage("sessionsList", {greeting: "hello"});

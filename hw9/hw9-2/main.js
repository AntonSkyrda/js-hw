let arr = ["Main", "Products", "About us", "Contacts"]

const ul = document.createElement("ul");


for (const ulElement of arr) {
    let li = document.createElement("li");
    li.innerText = ulElement;
    ul.appendChild(li);
}

document.body.appendChild(ul);
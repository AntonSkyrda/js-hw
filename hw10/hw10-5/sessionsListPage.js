const sessionsList = JSON.parse(localStorage.getItem("sessionsList"))

const tracker = sessionsList.length + 1;

const h1 = document.createElement("h1");
h1.innerHTML = `Page was visited ${tracker} times.`;

const ul = document.createElement("ul");
for (const session of sessionsList) {
    const li = document.createElement("li");
    li.innerText = session;
    ul.appendChild(li);
}

document.body.append(h1, ul);

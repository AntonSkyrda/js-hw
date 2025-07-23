const arr = Array.from({ length: 100 }, (_, i) => i + 1);

let pagination = 0;
const itemsPerPage = 10;

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const content = document.getElementById("content");

function renderPage() {
    content.innerHTML = "";
    const start = pagination;
    const end = pagination + itemsPerPage;

    for (let i = start; i < end && i < arr.length; i++) {
        const div = document.createElement("div");
        div.className = "itemDiv";
        div.innerText = arr[i];
        content.appendChild(div);
    }
}

renderPage();

previous.addEventListener("click", () => {
    if (pagination >= itemsPerPage) {
        pagination -= itemsPerPage;
        renderPage();
    }
});

next.addEventListener("click", () => {
    if (pagination + itemsPerPage < arr.length) {
        pagination += itemsPerPage;
        renderPage();
    }
})
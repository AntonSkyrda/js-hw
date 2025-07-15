const div = document.createElement("div");

div.id = "text";
div.innerText = "Hello";

const btn = document.createElement("button");
btn.id = "btn";

btn.onclick = function () {
    div.style.display = "none";
}

document.body.append(div, btn);
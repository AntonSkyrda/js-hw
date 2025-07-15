const input = document.createElement("input");
input.id = "text"

const btn = document.createElement("button");
btn.id = "submit"
document.body.append(input, btn);

btn.onclick = () => {
    document.querySelectorAll("p").forEach((el) => el.remove());
    const value = +input.value;
    const p = document.createElement("p");
    if (value >= 18 ) {
        p.innerText = "You are adult";
        document.body.appendChild(p)
    } else if (value < 18) {
        p.innerText = "You are not adult"
        document.body.appendChild(p)
    } else {
        p.innerText = "Incorrect input"
        document.body.appendChild(p)
    }
}
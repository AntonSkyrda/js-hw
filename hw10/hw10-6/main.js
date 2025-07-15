const kilograms = document.getElementById("convector");

const p = document.createElement("p");

kilograms.oninput = function () {
    let pound = kilograms.value * 2.20462;
    p.innerText = `${pound} pounds`;
}

document.body.appendChild(p);

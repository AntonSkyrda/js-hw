const tableGenerationForm = document.forms["tableGenerationForm"]


tableGenerationForm.onsubmit = event => {
    event.preventDefault();
    document.querySelectorAll("table").forEach((el) => el.remove());
    const rowsValue = +tableGenerationForm.rows.value;
    const colsValue = +tableGenerationForm.cols.value;
    const content = tableGenerationForm.content.value;
    const table = document.createElement("table");
    for (let i = 0; i < rowsValue; i++) {
        const tr = document.createElement("tr")
        for (let j = 0; j < colsValue; j++) {
            const td = document.createElement("td");
            td.innerText = content;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

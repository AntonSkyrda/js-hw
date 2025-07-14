let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4},
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    div.className = "item";
    h1.className = "heading";
    h1.innerText = `${coursesAndDurationArrayElement.title}`;
    p.className = "description";
    p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
    div.append(h1, p)
    document.body.appendChild(div);
}
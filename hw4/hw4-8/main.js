let people = [
    { id: 1, name: 'Anna', age: 25 },
    { id: 2, name: 'Bohdan', age: 32 },
    { id: 3, name: 'Iryna', age: 28 },
    { id: 4, name: 'Dmytro', age: 21 },
    { id: 5, name: 'Olena', age: 30 }
];


function addPeople(arr) {
    for (const item of arr) {
        document.write(
            `
            <div>
                <p>${item.id}</p>
                <p>${item.name}</p>
                <p>${item.age}</p>
            </div>
            `
        )
    }
}

addPeople(people)

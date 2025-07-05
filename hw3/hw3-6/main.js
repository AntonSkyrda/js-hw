let users = [

    {name: "vasya", age: 31, status: false},

    {name: "petya", age: 30, status: true},

    {name: "kolya", age: 29, status: true},

    {name: "olya", age: 28, status: false},

    {name: "max", age: 30, status: true},

    {name: "anya", age: 31, status: false},

    {name: "oleg", age: 28, status: false},

    {name: "andrey", age: 29, status: true},

    {name: "masha", age: 30, status: true},

    {name: "olya", age: 31, status: false},

    {name: "max", age: 31, status: true}

];

document.write("<h1> status true </h1>")

for (const user of users) {
    if (user.status) {
        document.write(
            `
            <p>
                ${user.name}
            </p>
            `
        )
    }
}

document.write("<h1> status false </h1>")

for (const user of users) {
    if (!user.status) {
        document.write(
            `
            <p>
                ${user.name}
            </p>
            `
        )
    }
}

document.write("<h1> older than 30 </h1>")

for (const user of users) {
    if (user.age > 30) {
        document.write(
            `
            <p>
                ${user.name}
            </p>
            `
        )
    }
}


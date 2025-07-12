function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(1,"John", "Doe", "jd@gmail.com", 123));
users.push(new User(2, "Alice", "Smith", "alice.smith@example.com", 101234567));
users.push(new User(3, "Bob", "Johnson", "b.johnson@example.com", 102345678));
users.push(new User(4, "Charlie", "Brown", "charlie.brown@example.com", 103456789));
users.push(new User(5, "Diana", "Miller", "diana.miller@example.com", 104567890));
users.push(new User(6, "Ethan", "Davis", "ethan.davis@example.com", 105678901));
users.push(new User(7, "Fiona", "Garcia", "fiona.garcia@example.com", 106789012));
users.push(new User(8, "George", "Martinez", "george.martinez@example.com", 107890123));
users.push(new User(9, "Hannah", "Lopez", "hannah.lopez@example.com", 108901234));
users.push(new User(10, "Ivan", "Petrov", "ivan.petrov@example.com", 109012345));


console.log(users);
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [];

clients.push(new Client(1, "John", "Doe", "john.doe@example.com", 123456789, [
    { product: "Laptop", price: 1200 },
    { product: "Mouse", price: 25 }
]));

clients.push(new Client(2, "Alice", "Smith", "alice.smith@example.com", 223456789, [
    { product: "Phone", price: 800 },
    { product: "Headphones", price: 150 }
]));

clients.push(new Client(3, "Bob", "Johnson", "bob.johnson@example.com", 323456789, [
    { product: "Tablet", price: 500 }
]));

clients.push(new Client(4, "Diana", "Miller", "diana.miller@example.com", 423456789, [
    { product: "Camera", price: 950 },
    { product: "Tripod", price: 75 }
]));

clients.push(new Client(5, "Ethan", "Davis", "ethan.davis@example.com", 523456789, [
    { product: "Monitor", price: 300 },
    { product: "Keyboard", price: 80 },
    { product: "Mouse", price: 40 }
]));

clients.push(new Client(6, "Fiona", "Garcia", "fiona.garcia@example.com", 623456789, [
    { product: "Smartwatch", price: 250 }
]));

clients.push(new Client(7, "George", "Martinez", "george.martinez@example.com", 723456789, [
    { product: "Printer", price: 200 },
    { product: "Ink", price: 40 }
]));

clients.push(new Client(8, "Hannah", "Lopez", "hannah.lopez@example.com", 823456789, [
    { product: "Router", price: 120 },
    { product: "LAN Cable", price: 15 }
]));

clients.push(new Client(9, "Ivan", "Petrov", "ivan.petrov@example.com", 923456789, [
    { product: "External HDD", price: 150 },
    { product: "USB Flash Drive", price: 30 }
]));

clients.push(new Client(10, "Julia", "Brown", "julia.brown@example.com", 1023456789, [
    { product: "Microphone", price: 180 },
    { product: "Webcam", price: 110 }
]));

console.log(clients);

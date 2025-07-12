// function Car(model, manufacturer, createdYear, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.createdYear = createdYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`Drive with ${this.maxSpeed} km/h`);
//     }
//     this.info = function () {
//         console.log(
//             `
//             Model: ${this.model},
//             Manufacturer: ${this.manufacturer},
//             Created Year: ${this.createdYear},
//             Max Speed: ${this.maxSpeed},
//             Engine Volume: ${this.engineVolume}.
//             `
//         )
//     }
//     this.increaseMaxSpeed = (newSpeed) => newSpeed > 0 ? this.maxSpeed = newSpeed : console.log("Incorrect input value");
//     this.changeYear = (newValue) => this.createdYear = newValue;
//     this.addDriver = (driver) => this.driver = driver;
// }

class Car {
    constructor(model, manufacturer, createdYear, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.createdYear = createdYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive = function () {
        console.log(`Drive with ${this.maxSpeed} km/h`);
    }

    info = function () {
        console.log(
            `
            Model: ${this.model},
            Manufacturer: ${this.manufacturer},
            Created Year: ${this.createdYear},
            Max Speed: ${this.maxSpeed},
            Engine Volume: ${this.engineVolume}.
            `
        )
    }
    increaseMaxSpeed = (newSpeed) => newSpeed > 0 ? this.maxSpeed = newSpeed : console.log("Incorrect input value");

    changeYear = (newValue) => this.createdYear = newValue;

    addDriver = (driver) => this.driver = driver;
}

const myCar = new Car("Civic", "Honda", 2015, 200, 1.8);

myCar.info();

myCar.drive();

myCar.increaseMaxSpeed(250);
myCar.drive();

myCar.increaseMaxSpeed(-10);
myCar.changeYear(2020);
myCar.info();

myCar.addDriver({name: "John", age: 30, license: true});

console.log(myCar.driver);

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.shoe) {
                this.wife = cinderella
            }
        }
    }

    printWife() {
        if (this.wife) {
            console.log(this.wife.name);
        } else {
            console.log("No wife yet");
        }

    }
}

const cinderellas = [];

cinderellas.push(new Cinderella("Anna", 19, 36));
cinderellas.push(new Cinderella("Bella", 21, 37));
cinderellas.push(new Cinderella("Clara", 18, 35));
cinderellas.push(new Cinderella("Diana", 22, 38));
cinderellas.push(new Cinderella("Eva", 20, 36));
cinderellas.push(new Cinderella("Fiona", 23, 39));
cinderellas.push(new Cinderella("Gina", 19, 37));
cinderellas.push(new Cinderella("Hanna", 21, 38));
cinderellas.push(new Cinderella("Ivy", 22, 35));
cinderellas.push(new Cinderella("Julia", 20, 36));

const prince = new Prince("prince", 25, 35);

prince.printWife();

prince.findCinderella(cinderellas);

prince.printWife();